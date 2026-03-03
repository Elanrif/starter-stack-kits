import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-linear-to-b from-black/80 to-black/40 border-b border-white/10 shadow-lg shadow-black/50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo/Brand */}
        <Link href="/" className="relative group">
          <h1 className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-gray-300 hover:to-white transition-all duration-300">
            kickstart projects
          </h1>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 to-red-300 group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="relative group text-gray-300 hover:text-white transition-colors duration-300"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 to-red-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="relative group text-gray-300 hover:text-white transition-colors duration-300"
              >
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 to-red-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="relative group text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 to-red-300 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
