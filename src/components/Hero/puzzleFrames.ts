export const TOTAL_FRAMES = 241;
export const MAX_FRAME_INDEX = TOTAL_FRAMES - 1;

export function getFrameSrc(index: number) {
  return `/puzzle-frames/frame_${String(index).padStart(6, "0")}.png`;
}

export function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number,
) {
  const canvasAspect = width / height;
  const imgAspect = img.naturalWidth / img.naturalHeight;

  let drawWidth: number;
  let drawHeight: number;
  let offsetX: number;
  let offsetY: number;

  if (imgAspect > canvasAspect) {
    drawHeight = height;
    drawWidth = img.naturalWidth * (height / img.naturalHeight);
    offsetX = (width - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = width;
    drawHeight = img.naturalHeight * (width / img.naturalWidth);
    offsetX = 0;
    offsetY = (height - drawHeight) / 2;
  }

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}
