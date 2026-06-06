import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b">
      <h1 className="text-3xl font-bold">🌍 Explora</h1>

      <div className="flex gap-8">
        <Link href="/explore">Explore</Link>
        <Link href="/itinerary">AI Routes</Link>
        <Link href="/saved">Saved</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}