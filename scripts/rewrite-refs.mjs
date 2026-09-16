/**
 * rewrite-refs.mjs — one-shot script to replace .png/.jpg/.jpeg → .webp in all source files
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "src");
const exts = [".png", ".jpg", ".jpeg"];
const srcExts = [".tsx", ".ts", ".jsx", ".js", ".html", ".css"];
const DELIMITERS = new Set(["'", '"', "(", ")", " ", "\t", "\r", "\n"]);

function collectFiles(dir, found = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules") continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) collectFiles(full, found);
    else if (srcExts.includes(path.extname(e.name).toLowerCase()))
      found.push(full);
  }
  return found;
}

const files = [...collectFiles(SRC_DIR), path.join(ROOT, "index.html")].filter(
  fs.existsSync
);

let totalChanged = 0;
for (const f of files) {
  let content = fs.readFileSync(f, "utf8");
  let changed = false;

  for (const ext of exts) {
    let result = "";
    let i = 0;
    while (i < content.length) {
      const idx = content.indexOf(ext, i);
      if (idx === -1) {
        result += content.slice(i);
        break;
      }
      const afterIdx = idx + ext.length;
      const after = content[afterIdx] ?? "";
      if (DELIMITERS.has(after) || afterIdx === content.length) {
        result += content.slice(i, idx) + ".webp";
        changed = true;
        i = afterIdx;
      } else {
        result += content.slice(i, afterIdx);
        i = afterIdx;
      }
    }
    content = result;
  }

  if (changed) {
    fs.writeFileSync(f, content, "utf8");
    console.log("  updated: " + path.relative(ROOT, f).replace(/\\/g, "/"));
    totalChanged++;
  }
}

console.log(`\nDone. ${totalChanged} file(s) updated.`);
