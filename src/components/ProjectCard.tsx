import { Project } from "../types/project";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative h-full cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500">
        {/* Card Background with gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-white/15 to-white/5 border border-white/20 rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:bg-linear-to-br group-hover:from-white/25 group-hover:to-white/10 group-hover:border-white/60 group-hover:shadow-2xl group-hover:shadow-white/20"></div>

        {/* Animated glow on hover */}
        <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-45 group-hover:animate-pulse"></div>

        {/* Card Content */}
        <div className="relative z-10 p-5 sm:p-6 lg:p-8 h-full flex flex-col backdrop-blur-sm">
          {/* Project Image if available */}
          {project.image && (
            <div className="mb-4 sm:mb-5 relative h-32 sm:h-40 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}

          {/* Title */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-red-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5 line-clamp-3 grow leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-linear-to-r from-white/15 to-white/5 text-gray-200 border border-white/30 group-hover:border-white/60 group-hover:bg-linear-to-r group-hover:from-white/25 group-hover:to-white/10 transition-all duration-300 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-linear-to-r from-white/15 to-white/5 text-gray-300 border border-white/30 group-hover:border-white/60 group-hover:bg-linear-to-r group-hover:from-white/25 group-hover:to-white/10 transition-all duration-300 font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action indicators */}
          <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
            <span>View Project</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7m0 0l-7 7m7-7H5"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
