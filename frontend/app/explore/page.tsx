import SearchBar from "../../components/SearchBar";
import CategoryFilters from "../../components/CategoryFilters";
import ExploreMap from "../../components/ExploreMap";
import PlaceCard from "../../components/PlaceCard";
import { places } from "../../data/places";

export default function ExplorePage() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Explore
      </h1>

      <SearchBar />

      <CategoryFilters />

      <div className="mt-8">
        <ExploreMap />
      </div>

      <section className="grid md:grid-cols-3 gap-6 mt-10">
        {places.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
          />
        ))}
      </section>
    </main>
  );
}