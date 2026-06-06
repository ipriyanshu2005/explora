const categories = [
  "All",
  "Food",
  "Hidden Gems",
  "History",
  "Photography",
  "Experiences",
];

export default function CategoryFilters() {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {categories.map((category) => (
        <button
          key={category}
          className="border px-4 py-2 rounded-full"
        >
          {category}
        </button>
      ))}
    </div>
  );
}