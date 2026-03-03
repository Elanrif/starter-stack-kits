import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center py-20 flex flex-col items-center justify-center min-h-[60vh]">
      {/* Hero Content */}
      <div className="max-w-2xl">
        {/* Background blur effect box */}
        <div className="relative bg-gradient-to-br from-red-900/20 to-red-900/10 border border-red-900/30 rounded-2xl p-12 backdrop-blur-sm hover:border-red-900/60 transition-all duration-300 mb-8">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hi! I am John Doe
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Backend-focused Spring Boot & Microservices developer building
              scalable AI-powered systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
