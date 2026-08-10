"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { MotionValue } from "framer-motion";
import { drawImageCover, MAX_FRAME_INDEX } from "./puzzleFrames";

type PuzzleCanvasProps = {
  frameIndex: MotionValue<number>;
  framesRef: RefObject<(HTMLImageElement | null)[]>;
  active: boolean;
};

export default function PuzzleCanvas({
  frameIndex,
  framesRef,
  active,
}: PuzzleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastFrameRef = useRef(-1);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { width, height };
      lastFrameRef.current = -1;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement!);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let rafId = 0;

    const render = () => {
      const latest = frameIndex.get();
      const targetFrame = Math.min(
        MAX_FRAME_INDEX,
        Math.max(0, Math.round(latest)),
      );

      if (targetFrame !== lastFrameRef.current) {
        const img = framesRef.current[targetFrame];
        if (img?.complete && img.naturalWidth > 0) {
          const { width, height } = sizeRef.current;
          ctx.fillStyle = "#111111";
          ctx.fillRect(0, 0, width, height);
          drawImageCover(ctx, img, width, height);
          lastFrameRef.current = targetFrame;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, [active, frameIndex, framesRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full will-change-contents"
      aria-hidden
    />
  );
}
