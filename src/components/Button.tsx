export default function Button({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </a>
  );
}