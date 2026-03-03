"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.featured &&
      (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <section id="projects">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-5xl font-bold mb-4">Projects</h2>
        <div className="w-full flex justify-center mt-6 sm:mt-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 sm:py-3 bg-gray-800/50 border border-red-900/30 rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-red-900/60 transition-all"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-fit">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full py-8 sm:py-12 text-sm sm:text-base">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
