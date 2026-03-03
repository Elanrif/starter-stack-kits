import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Content */}
      <div className="w-full max-w-3xl">
        {/* Background blur effect box */}
        <div className="relative bg-linear-to-br from-white/15 to-white/5 border border-white/20 rounded-xl sm:rounded-2xl lg:rounded-3xl p-8 sm:p-10 lg:p-16 backdrop-blur-xl hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 group overflow-hidden">
          {/* Animated gradient background on hover */}
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-bl from-red-600/0 via-purple-600/0 to-transparent group-hover:from-red-600/10 group-hover:via-purple-600/5 rounded-full blur-3xl transition-all duration-500 group-hover:opacity-100"></div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-10 justify-center">
            {/* Profile Image with animation */}
            <div className="shrink-0 relative group/image">
              <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-purple-600/20 rounded-full blur-2xl group-hover/image:blur-3xl transition-all duration-300"></div>
              <Image
                src="/profile.png"
                alt="Profile"
                width={150}
                height={150}
                className="relative rounded-full border-4 border-white/40 shadow-2xl shadow-white/20 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover transition-transform duration-300 group-hover/image:scale-105"
                priority
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col text-center sm:text-left items-center sm:items-start gap-4 sm:gap-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 leading-tight">
                <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                  Hi! I am EL-anrif
                </span>
                <br />
                <span className="bg-linear-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  SAID BACO
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md">
                💻 Software Engineer passionate about building modern solutions.
              </p>
              <p className="text-sm sm:text-base text-gray-400 italic max-w-md">
                This is a starter stack template for your projects.
              </p>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
                <Link
                  href="/projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg shadow-red-600/40 hover:shadow-xl hover:shadow-red-600/60 hover:scale-105 text-sm sm:text-base"
                >
                  View My Projects
                </Link>
                <Link
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:border-white/50 hover:scale-105 text-sm sm:text-base"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
