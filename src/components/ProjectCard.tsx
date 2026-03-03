import { Project } from "../types/project";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 hover:border-white/40 transition-all duration-300 cursor-pointer h-full hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/2 rounded-lg sm:rounded-xl transition-all duration-300"></div>

        <div className="relative z-10">
          <h3 className="text-base sm:text-lg font-bold mb-2 text-white group-hover:text-gray-100 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 sm:px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 sm:px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/20">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
