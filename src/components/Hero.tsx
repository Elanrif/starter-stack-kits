import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center flex flex-col items-center justify-center min-h-[60vh] py-8 sm:py-12">
      {/* Hero Content */}
      <div className="max-w-2xl w-full px-4 sm:px-0">
        {/* Background blur effect box */}
        <div className="relative bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-12 backdrop-blur-sm hover:border-white/40 transition-all duration-300 mb-8">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl opacity-20 pointer-events-none hidden sm:block"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <Image
              src="/profile.png"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-white/30 shadow-lg shrink-0 w-20 h-20 sm:w-30 sm:h-30"
              priority
            />
            <div className="flex flex-col text-center sm:text-start items-center sm:items-start">
              <h1 className="text-2xl sm:text-4xl font-extrabold mb-3 sm:mb-4 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hi! I am EL-anrif SAID BACO
              </h1>
              <p className="text-sm sm:text-xl text-gray-300 leading-relaxed">
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
