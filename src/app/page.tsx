import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated background with linear and glow effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-black via-slate-950 to-black"></div>
        {/* Top right glow */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-bl from-red-600/10 via-purple-600/5 to-transparent rounded-full blur-3xl"></div>
        {/* Bottom left glow */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-blue-600/10 via-cyan-600/5 to-transparent rounded-full blur-3xl"></div>
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <section
          id="contact"
          className="text-center py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-linear-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-12 sm:mb-16 leading-relaxed">
              Open to remote & freelance opportunities. Let&apos;s connect!
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 bg-linear-to-r from-white/10 to-white/5 border border-white/20 rounded-xl sm:rounded-2xl p-8 sm:p-10 lg:p-12 w-fit mx-auto hover:border-white/40 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/20 group">
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-linear-to-r from-red-600/0 to-blue-600/0 group-hover:from-red-600/5 group-hover:to-blue-600/5 rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                <Link
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/icon p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group/icon p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </Link>
                <Link
                  href="mailto:johndoe@example.com"
                  className="relative group/icon p-3 sm:p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
