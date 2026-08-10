"use client";

import { useEffect, useRef, useState } from "react";
import { getFrameSrc, TOTAL_FRAMES } from "./puzzleFrames";

const BATCH_SIZE = 16;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export function usePuzzleFramePreloader() {
  const framesRef = useRef<(HTMLImageElement | null)[]>(
    Array.from({ length: TOTAL_FRAMES }, () => null),
  );
  const [isReady, setIsReady] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const frames = framesRef.current;

    async function preload() {
      try {
        const first = await loadImage(getFrameSrc(0));
        if (cancelled) return;

        frames[0] = first;
        setFirstFrameReady(true);

        for (let start = 1; start < TOTAL_FRAMES; start += BATCH_SIZE) {
          if (cancelled) return;

          const end = Math.min(start + BATCH_SIZE, TOTAL_FRAMES);
          const batch = await Promise.all(
            Array.from({ length: end - start }, (_, offset) =>
              loadImage(getFrameSrc(start + offset)),
            ),
          );

          if (cancelled) return;

          for (let i = 0; i < batch.length; i++) {
            frames[start + i] = batch[i];
          }
        }

        if (!cancelled) setIsReady(true);
      } catch {
        if (!cancelled) setIsReady(true);
      }
    }

    preload();

    return () => {
      cancelled = true;
    };
  }, []);

  return { framesRef, isReady, firstFrameReady };
}
