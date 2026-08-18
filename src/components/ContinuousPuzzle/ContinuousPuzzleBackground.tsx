"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePuzzleFramePreloader } from "../Hero/usePuzzleFramePreloader";
import { MAX_FRAME_INDEX } from "../Hero/puzzleFrames";
import PuzzleCanvas from "../Hero/PuzzleCanvas";

type ContinuousPuzzleBackgroundProps = {
  hero: React.ReactNode;
  services: React.ReactNode;
  about: React.ReactNode;
  children: React.ReactNode;
};

export default function ContinuousPuzzleBackground({
  hero,
  services,
  about,
  children,
}: ContinuousPuzzleBackgroundProps) {
  const storyRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { framesRef, isReady, firstFrameReady } = usePuzzleFramePreloader();

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: fadeProgress } = useScroll({
    target: aboutRef,
    offset: ["end end", "end start"],
  });

  const smoothProgress = useSpring(storyProgress, {
    stiffness: 260,
    damping: 38,
    mass: 0.25,
    restDelta: 0.0005,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, MAX_FRAME_INDEX]);

  // Full opacity through Hero + Services + About; fade only after About ends
  const puzzleOpacity = useTransform(fadeProgress, [0, 0.45, 1], [1, 0.65, 0.1]);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-0 h-screen w-full overflow-hidden">
        {firstFrameReady && !isReady && (
          <div className="absolute inset-0">
            <Image
              src="/puzzle-frames/frame_000000.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              draggable={false}
            />
          </div>
        )}

        <motion.div className="absolute inset-0" style={{ opacity: puzzleOpacity }}>
          <PuzzleCanvas
            frameIndex={frameIndex}
            framesRef={framesRef}
            active={firstFrameReady}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111111]/50 via-transparent to-[#111111]/70" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.08)_0%,transparent_65%)]" />
        </motion.div>
      </div>

      <div ref={storyRef} className="relative">
        {hero}
        {services}
        <div ref={aboutRef}>{about}</div>
      </div>

      <div className="relative">{children}</div>
    </div>
  );
}
