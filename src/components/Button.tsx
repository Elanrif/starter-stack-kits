export default function Button({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const baseStyles =
    "px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 inline-block text-sm sm:text-base hover:scale-105";

  const variants = {
    primary:
      "bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-600/40 hover:shadow-xl hover:shadow-red-600/60",
    secondary:
      "bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50",
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}
