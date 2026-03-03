"use client";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useState } from "react";
import Link from "next/link";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredProjects = projects.filter((project) => {
    if (showFeaturedOnly && !project.featured) return false;
    return (
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-extrabold mb-4 bg-linear-to-r from-white to-red-300 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-400">
            Explore my latest work and projects
          </p>
        </div>

        {/* Featured Toggle */}
        <div className="mb-8 flex justify-center">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={showFeaturedOnly}
              onChange={(e) => setShowFeaturedOnly(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-white/30 cursor-pointer accent-red-500"
            />
            <span className="text-gray-300 hover:text-white transition-colors">
              Show Featured Only
            </span>
          </label>
        </div>

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md group">
            <svg
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-500 group-focus-within:text-red-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/30 transition-all duration-300 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-center text-sm text-gray-400">
          {filteredProjects.length} project
          {filteredProjects.length !== 1 ? "s" : ""} found
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <p className="text-xl text-gray-400 mb-2">No projects found</p>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
