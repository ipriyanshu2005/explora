import { Place } from "../types/place";

type PlaceCardProps = {
  place: Place;
};

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-lg transition">

      <h3 className="text-xl font-semibold">
        {place.name}
      </h3>

      <p className="text-gray-500">
        {place.category}
      </p>

      <p className="mt-2">
        ⭐ {place.rating}
      </p>

      <p className="text-sm text-gray-500 mt-2">
        📍 {place.city}
      </p>

    </div>
  );
}