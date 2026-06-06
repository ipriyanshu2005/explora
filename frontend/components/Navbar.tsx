export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b">
      <h1 className="text-3xl font-bold">🌍 Explora</h1>

      <div className="flex gap-8">
        <a href="#">Explore</a>
        <a href="#">Features</a>
        <a href="#">Sign In</a>
      </div>
    </nav>
  );
}