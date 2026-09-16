import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

type VideoCard = {
  src: string;
  /** absolute position within the 946px background container */
  style: React.CSSProperties;
  width: number;
  height: number;
  /** extra parallax offset multiplier to make each card feel independent */
  parallaxFactor: number;
};

type FeaturedWork = {
  title: string;
  backgroundImage: string;
  /** single centered card (index 0) vs multiple free-floating cards */
  centered: boolean;
  videoCards: VideoCard[];
  descriptionLines: string[];
};

const featuredWorks: FeaturedWork[] = [
  {
    title: "Crimson Silhouette",
    backgroundImage: "/images/featured-work.webp",
    centered: true,
    videoCards: [
      {
        src: "https://res.cloudinary.com/otxrtuoh/video/upload/v1789229444/AQMCvwQ57Q5d2xEV-HxEfLl0wwq79m1CVDsc2XW2C_DTpR63MTv_toHLOMdjXMR7-zHrAzkvokq6LstHM5OOTUS703NJh808zWkXQ0U.mp4",
        style: {},
        width: 797,
        height: 498,
        parallaxFactor: 1,
      },
    ],
    descriptionLines: [
      "An evocative study in silhouette and form,",
      "exploring fluid contours and dramatic lighting —",
      "published in international high-fashion editorials.",
    ],
  },
  {
    title: "ASFW Runway Series",
    backgroundImage: "/images/featured-work-2.webp",
    centered: false,
    videoCards: [
      {
        src: "https://res.cloudinary.com/otxrtuoh/video/upload/v1789229910/AQMdtKfrlQmmWaTa2Q6gfAJcsUG4G6K0x4puRFQteSeOcMOTbqmP1xZZ17tvL8JMjRX-ZXv3HXZhEraFhVxADq3FayBYoqMj.mp4",
        style: { top: "9%", left: "7%" },
        width: 797,
        height: 498,
        parallaxFactor: 0.9,
      },
      {
        src: "https://res.cloudinary.com/otxrtuoh/video/upload/v1789230345/bmlpictures__be8ty_thank_you_love.mp4",
        style: { bottom: "12%", right: "8%" },
        width: 797,
        height: 498,
        parallaxFactor: 1.15,
      },
    ],
    descriptionLines: [
      "Headline runway appearances for leading",
      "designers, showcasing garment movement,",
      "structure, and striking stage presence.",
    ],
  },
  {
    title: "Heritage & Habesha Kemis",
    backgroundImage: "/images/featured-work-3.webp",
    centered: false,
    videoCards: [
      {
        src: "https://res.cloudinary.com/otxrtuoh/video/upload/v1789229914/In_the_shade_of_CC_survbeauty_inethiopiawesurvbeauty.mp4",
        style: { top: "8%", right: "10%" },
        width: 797,
        height: 498,
        parallaxFactor: 1.05,
      },
      {
        src: "https://res.cloudinary.com/otxrtuoh/video/upload/v1789230348/%E1%8A%90.%E1%8C%A0.%E1%88%8B_selamawit_tsuruy_shot_by_henokish_wisdm_BTS-_alazar_k5Studio-_jebastudio_Music_-_y.mp4",
        style: { bottom: "10%", left: "9%" },
        width: 797,
        height: 498,
        parallaxFactor: 0.85,
      },
    ],
    descriptionLines: [
      "A tribute to Ethiopian craftsmanship,",
      "blending ancient hand-woven traditions",
      "with modern high-fashion editorial styling.",
    ],
  },
];

/* ─── Floating video card (absolutely positioned) ─── */
type FloatingCardProps = {
  vc: VideoCard;
  scrollYProgress: MotionValue<number>;
  vh: number;
  baseMultiplier: number;
};

const FloatingCard = ({
  vc,
  scrollYProgress,
  vh,
  baseMultiplier,
}: FloatingCardProps) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [vh * baseMultiplier * vc.parallaxFactor, -vh * baseMultiplier * vc.parallaxFactor]
  );

  return (
    <motion.div
      className="absolute z-10 overflow-hidden rounded-[15px] shadow-2xl"
      style={{ ...vc.style, width: vc.width, height: vc.height, y }}
    >
      <video
        src={vc.src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
};

/* ─── One featured work block ─── */
type WorkBlockProps = {
  work: FeaturedWork;
  index: number;
};

const WorkBlock = ({ work, index }: WorkBlockProps) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [vh, setVh] = useState(0);

  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const onResize = () => setVh(window.innerHeight);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const bgMultipliers = [0.45, 0.55, 0.5];
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    [-vh * bgMultipliers[index], vh * bgMultipliers[index]]
  );

  // For the centered card (index 0) we still use a single motion wrapper
  const cardMultipliers = [0.15, 0.2, 0.12];
  const centeredCardY = useTransform(
    scrollYProgress,
    [0, 1],
    [vh * cardMultipliers[index], -vh * cardMultipliers[index]]
  );

  return (
    <div ref={blockRef}>
      {/* 946px background block */}
      <div className="relative h-[946px] w-full overflow-hidden">
        {/* Parallax background */}
        <motion.div
          className="absolute inset-x-0 -top-[20%] -bottom-[20%]"
          style={{
            backgroundImage: `url('${work.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            y: bgY,
          }}
        />

        {/* Section header — first block only */}
        {index === 0 && (
          <div className="relative z-10 pt-[24px] flex items-center justify-center">
            <div className="relative inline-flex items-baseline justify-center">
              <span className="absolute right-full mr-3 bottom-[12px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-none tracking-[0.05em] text-[#e6dfe4]/80 uppercase">
                Featured
              </span>
              <h2
                id="featured-work-title"
                className="[font-family:'KHTeka-Regular',Helvetica] text-[84px] font-normal leading-none tracking-[-1.5px] text-white"
              >
                Work
              </h2>
            </div>
          </div>
        )}

        {work.centered ? (
          /* ── Single centered card (block 1) ── */
          <motion.div
            className="relative z-10 mx-auto mt-[190px] flex w-full max-w-[1905px] flex-col items-center"
            style={{ y: centeredCardY }}
          >
            <div className="flex flex-col items-start">
              <Card className="h-[498px] w-[797px] overflow-hidden rounded-[15px] border-0 bg-transparent p-0 shadow-2xl">
                <CardContent className="h-full w-full p-0">
                  <figure className="h-full w-full">
                    <video
                      src={work.videoCards[0].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="h-full w-full object-cover"
                    />
                  </figure>
                </CardContent>
              </Card>
              <p className="mt-[32px] [font-family:'KHTeka-Regular',Helvetica] text-[32px] font-normal leading-[34.9px] tracking-[-0.64px] text-white">
                {work.title}
              </p>
            </div>
          </motion.div>
        ) : (
          /* ── Multiple freely-positioned cards (blocks 2 & 3) ── */
          <>
            {work.videoCards.map((vc, i) => (
              <FloatingCard
                key={i}
                vc={vc}
                scrollYProgress={scrollYProgress}
                vh={vh}
                baseMultiplier={cardMultipliers[index]}
              />
            ))}
            {/* Work title — bottom-left of the block */}
            <p className="absolute bottom-[32px] left-[7%] z-20 [font-family:'KHTeka-Regular',Helvetica] text-[32px] font-normal leading-[34.9px] tracking-[-0.64px] text-white drop-shadow-lg">
              {work.title}
            </p>
          </>
        )}
      </div>

      {/* Description strip */}
      <div className="flex h-[197px] w-full items-center justify-end pr-[calc((100%-797px)/2)]">
        <p className="h-[65px] w-[397px] text-left [font-family:'KHTeka-Regular',Helvetica] text-[18px] font-normal leading-[21.6px] tracking-[0em] text-white/80">
          {work.descriptionLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < work.descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

/* ─── Section root ─── */
export const FeaturedWorkShowcaseSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="featured-work-title"
      className="relative overflow-hidden bg-[#101214] text-white"
    >
      {featuredWorks.map((work, index) => (
        <WorkBlock key={work.title} work={work} index={index} />
      ))}
    </section>
  );
};
