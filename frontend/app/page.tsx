export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 border-b">
        <h1 className="text-2xl font-bold">🌍 Explora</h1>

        <div className="flex gap-6">
          <a href="#">Explore</a>
          <a href="#">Features</a>
          <a href="#">Sign In</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Discover Cities Through Experiences
        </h1>

        <p className="text-lg max-w-2xl mb-8">
          Explore hidden gems, food spots, photography locations,
          historical landmarks, and personalized AI-generated routes.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Start Exploring
        </button>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-4 gap-6 p-8">
        <div className="border p-6 rounded-xl">
          🍜
          <h2 className="font-semibold mt-2">Food Discovery</h2>
        </div>

        <div className="border p-6 rounded-xl">
          ✨
          <h2 className="font-semibold mt-2">Hidden Gems</h2>
        </div>

        <div className="border p-6 rounded-xl">
          📸
          <h2 className="font-semibold mt-2">Photography Spots</h2>
        </div>

        <div className="border p-6 rounded-xl">
          🤖
          <h2 className="font-semibold mt-2">AI Routes</h2>
        </div>
      </section>
    </main>
  );
}