export default function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search places, food, hidden gems..."
        className="w-full border rounded-xl px-4 py-3"
      />
    </div>
  );
}