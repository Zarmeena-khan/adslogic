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
  return (
    <div className="relative bg-white">
      {hero}
      {services}
      {about}
      {children}
    </div>
  );
}
