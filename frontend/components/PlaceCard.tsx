type PlaceCardProps = {
  name: string;
  category: string;
  rating: number;
};

export default function PlaceCard({
  name,
  category,
  rating,
}: PlaceCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h3 className="text-xl font-semibold">{name}</h3>

      <p className="text-gray-600">{category}</p>

      <p className="mt-2">⭐ {rating}</p>
    </div>
  );
}