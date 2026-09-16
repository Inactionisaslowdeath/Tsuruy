/**
 * convert-to-webp.mjs
 * -------------------
 * Batch-converts every PNG/JPG/JPEG inside /public to WebP,
 * then updates every src/index.html reference from the old
 * extension to .webp so the app keeps working without manual edits.
 *
 * Usage:
 *   node scripts/convert-to-webp.mjs
 *
 * Options (env vars):
 *   QUALITY=80   (default 82) — WebP quality 0-100
 *   DRY_RUN=1    — preview which files would be converted, no writes
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIR = path.join(ROOT, "src");
const QUALITY = parseInt(process.env.QUALITY ?? "82", 10);
const DRY_RUN = process.env.DRY_RUN === "1";

const CONVERTIBLE = new Set([".png", ".jpg", ".jpeg"]);

// ── 1. Collect all convertible images recursively ──────────────────────────
function collectImages(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectImages(full, found);
    } else if (CONVERTIBLE.has(path.extname(entry.name).toLowerCase())) {
      found.push(full);
    }
  }
  return found;
}

// ── 2. Convert one image → .webp alongside the original ───────────────────
async function convertImage(srcPath) {
  const ext = path.extname(srcPath);
  const webpPath = srcPath.slice(0, -ext.length) + ".webp";

  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(srcPath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs >= srcStat.mtimeMs) {
      console.log(`  skip (already up-to-date): ${rel(webpPath)}`);
      return { skipped: true };
    }
  }

  const beforeBytes = fs.statSync(srcPath).size;

  if (!DRY_RUN) {
    await sharp(srcPath)
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(webpPath);
  }

  const afterBytes = DRY_RUN ? 0 : fs.statSync(webpPath).size;
  const saved = beforeBytes - afterBytes;
  const pct = ((saved / beforeBytes) * 100).toFixed(1);

  console.log(
    `  OK  ${rel(srcPath)} -> ${rel(webpPath)}` +
      (DRY_RUN
        ? " (dry-run)"
        : `  ${fmt(beforeBytes)} -> ${fmt(afterBytes)}  saved ${fmt(saved)} (${pct}%)`)
  );
  return { skipped: false, beforeBytes, afterBytes };
}

// ── 3. Rewrite source references ──────────────────────────────────────────
const SRC_EXTS = [".tsx", ".ts", ".jsx", ".js", ".html", ".css"];

function collectSrcFiles(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSrcFiles(full, found);
    } else if (SRC_EXTS.includes(path.extname(entry.name).toLowerCase())) {
      found.push(full);
    }
  }
  return found;
}

function rewriteSrcFile(filePath, convertedExts) {
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (const ext of convertedExts) {
    // Match references like  /images/foo.png  or  ../foo.png  or  "foo.jpg"
    // Uses a simple string split approach to avoid regex escaping issues
    const oldExt = ext; // e.g. ".png"
    const newExt = ".webp";
    // Find all occurrences of the extension followed by a quote/paren/space
    let result = "";
    let i = 0;
    while (i < content.length) {
      const idx = content.indexOf(oldExt, i);
      if (idx === -1) {
        result += content.slice(i);
        break;
      }
      // Check char after the extension is a delimiter (quote, paren, space, or end)
      const afterIdx = idx + oldExt.length;
      const after = content[afterIdx] ?? "";
      if (`'"() \t\r\n`.includes(after)) {
        result += content.slice(i, idx) + newExt;
        changed = true;
        i = afterIdx;
      } else {
        result += content.slice(i, idx + oldExt.length);
        i = afterIdx;
      }
    }
    content = result;
  }

  if (changed && !DRY_RUN) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`  updated refs in: ${rel(filePath)}`);
  } else if (changed && DRY_RUN) {
    console.log(`  would update refs in: ${rel(filePath)} (dry-run)`);
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────
function rel(p) {
  return path.relative(ROOT, p).replace(/\\/g, "/");
}
function fmt(bytes) {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  if (bytes >= 1_000) return `${(bytes / 1_000).toFixed(0)} KB`;
  return `${bytes} B`;
}

// ── Main ───────────────────────────────────────────────────────────────────
(async () => {
  console.log(
    `\nWebP batch converter  (quality=${QUALITY}${DRY_RUN ? ", DRY RUN" : ""})\n`
  );

  const images = collectImages(PUBLIC_DIR);
  console.log(`Found ${images.length} image(s) to process:\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let converted = 0;
  let skipped = 0;
  const convertedExts = new Set();

  for (const img of images) {
    const ext = path.extname(img).toLowerCase();
    const result = await convertImage(img);
    if (result.skipped) {
      skipped++;
    } else {
      converted++;
      convertedExts.add(ext);
      totalBefore += result.beforeBytes ?? 0;
      totalAfter += result.afterBytes ?? 0;
    }
  }

  console.log(`\n--------------------------------------`);
  console.log(`Converted : ${converted} file(s)`);
  console.log(`Skipped   : ${skipped} file(s) (already up-to-date)`);
  if (!DRY_RUN && converted > 0) {
    const saved = totalBefore - totalAfter;
    const pct = ((saved / totalBefore) * 100).toFixed(1);
    console.log(
      `Total size: ${fmt(totalBefore)} -> ${fmt(totalAfter)}  (saved ${fmt(saved)}, ${pct}%)`
    );
  }

  // ── Rewrite source references ──────────────────────────────────────────
  if (convertedExts.size > 0) {
    console.log(`\nRewriting source file references...\n`);
    const srcFiles = [
      ...collectSrcFiles(SRC_DIR),
      path.join(ROOT, "index.html"),
    ].filter(fs.existsSync);

    for (const f of srcFiles) {
      rewriteSrcFile(f, [...convertedExts]);
    }
  }

  console.log(
    `\nDone! The original PNG/JPG files are kept as backups.\n` +
      `You can delete them once you verify the site looks correct.\n`
  );
})();
