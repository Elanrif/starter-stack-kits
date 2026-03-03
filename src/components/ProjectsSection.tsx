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
    <section
      id="projects"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10">
            Explore some of my recent work and contributions
          </p>

          {/* Search Bar */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xl">
              <input
                type="text"
                placeholder="🔍 Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-linear-to-r from-white/10 to-white/5 border border-white/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 shadow-lg shadow-black/30"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20 w-full">
              <p className="text-gray-500 text-base sm:text-lg">
                😕 No projects found matching your search.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Try adjusting your search terms
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
