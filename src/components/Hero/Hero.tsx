"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import HeroContent from "./HeroContent";
import PuzzleCanvas from "./PuzzleCanvas";
import { usePuzzleFramePreloader } from "./usePuzzleFramePreloader";
import { MAX_FRAME_INDEX } from "./puzzleFrames";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { framesRef, isReady, firstFrameReady } = usePuzzleFramePreloader();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 38,
    mass: 0.25,
    restDelta: 0.0005,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, MAX_FRAME_INDEX]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#111111]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {firstFrameReady && !isReady && (
          <Image
            src="/puzzle-frames/frame_000000.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            draggable={false}
          />
        )}

        <PuzzleCanvas
          frameIndex={frameIndex}
          framesRef={framesRef}
          active={firstFrameReady}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111111]/60 via-transparent to-[#111111]/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.12)_0%,transparent_65%)]" />

        <HeroContent />
      </div>
    </section>
  );
}
