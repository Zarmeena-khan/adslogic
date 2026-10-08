import type { Project } from "./portfolioData";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
            <article className="ui-card group relative overflow-hidden rounded-2xl border hover:border-[#FF6B00]/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#FFF8F2] via-[#FFE9D6] to-[#FFD8B8]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">🎨</div>
        </div>
      </div>

      <div className="relative p-6">
        <span className="mb-2 inline-block rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-1 text-xs font-medium text-[#FF6B00]">
          {project.category}
        </span>

        <h3 className="text-lg font-semibold text-[#111111] sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {project.description}
        </p>
      </div>
    </article>
  );
}
