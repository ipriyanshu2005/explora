const features = [
  {
    icon: "🍜",
    title: "Food Discovery",
    description: "Find authentic local food experiences.",
  },
  {
    icon: "✨",
    title: "Hidden Gems",
    description: "Discover places beyond tourist guides.",
  },
  {
    icon: "📸",
    title: "Photography Spots",
    description: "Find stunning locations for photos.",
  },
  {
    icon: "🤖",
    title: "AI Routes",
    description: "Generate personalized itineraries.",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Explora?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="border rounded-2xl p-6 shadow-sm"
          >
            <div className="text-4xl">{feature.icon}</div>

            <h3 className="text-xl font-semibold mt-4">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}