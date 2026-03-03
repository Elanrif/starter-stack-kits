import { Project } from "../types/project";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group relative bg-gradient-to-br from-red-900/20 to-red-900/5 border border-red-900/30 rounded-xl p-6 hover:border-red-900/60 transition-all duration-300 cursor-pointer h-full hover:shadow-lg hover:shadow-red-900/20">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-red-500/5 rounded-xl transition-all duration-300"></div>

        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-red-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full bg-red-900/30 text-red-300 border border-red-900/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
