export default function Hero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <span className="inline-block px-4 py-2 rounded-full border text-sm mb-6">
          AI-Powered City Exploration
        </span>

        <h1 className="text-6xl font-bold leading-tight">
          Discover Cities
          <br />
          Through Experiences
        </h1>

        <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto">
          Explore hidden gems, local food, photography spots,
          historical landmarks, and personalized AI-generated routes.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-black text-white px-8 py-4 rounded-xl">
            Start Exploring
          </button>

          <button className="border px-8 py-4 rounded-xl">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}