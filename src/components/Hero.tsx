import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center flex flex-col items-center justify-center min-h-[60vh]">
      {/* Hero Content */}
      <div className="max-w-2xl">
        {/* Background blur effect box */}
        <div className="relative bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-12 backdrop-blur-sm hover:border-white/40 transition-all duration-300 mb-8">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
          <div className="relative z-10 flex flex-row items-center gap-8">
            <Image
              src="/profile.png"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-white/30 shadow-lg shrink-0"
              priority
            />
            <div className="flex flex-col text-start items-start">
              <h1 className="text-4xl font-extrabold mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hi! I am EL-anrif SAID BACO
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Software Engineer passionate about building modern solutions.
                This is a starter stack template for your projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
