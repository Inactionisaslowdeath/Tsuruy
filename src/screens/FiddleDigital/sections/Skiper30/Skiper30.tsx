"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/parallax/1.webp",
  "/images/parallax/2.webp",
  "/images/parallax/3.webp",
  "/images/parallax/4.webp",
  "/images/parallax/5.webp",
  "/images/parallax/6.webp",
  "/images/parallax/7.webp",
  "/images/parallax/8.webp",
  "/images/parallax/9.webp",
  "/images/parallax/10.webp",
  "/images/parallax/11.webp",
  "/images/parallax/12.webp",
  "/images/parallax/13.webp",
  "/images/parallax/14.webp",
  "/images/parallax/15.webp",
];

export const Skiper30 = (): JSX.Element => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2.2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.2]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="w-full bg-[#101214] text-white">
      {/* Parallax gallery without scroll indicator spacers */}
      <div
        ref={gallery}
        className="relative box-border flex h-[280vh] gap-[2vw] overflow-hidden bg-[#101214] px-[2vw] py-[4vw]"
      >
        <Column
          images={[images[6], images[1], images[11], images[4], images[13]]}
          y={y}
        />
        <Column
          images={[images[14], images[3], images[8], images[0], images[9]]}
          y={y2}
        />
        <Column
          images={[images[9], images[0], images[13], images[6], images[1]]}
          y={y3}
        />
        <Column
          images={[images[3], images[10], images[4], images[2], images[14]]}
          y={y4}
        />
      </div>
    </section>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[30%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] will-change-transform first:-top-[30%] [&:nth-child(2)]:-top-[65%] [&:nth-child(3)]:-top-[35%] [&:nth-child(4)]:-top-[55%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[20px] shadow-2xl"
        >
          <img
            src={src}
            alt="Portfolio work showcase"
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};
