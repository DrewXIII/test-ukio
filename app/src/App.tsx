import "./App.css";
import ApartmentList from "./components/ApartmentList/ApartmentList";
import { Filters } from "./components/Filters/Filters";
import { Results } from "./components/Results/Results";
import { useApartments } from "./hooks/useApartments";
import { useFilters } from "./hooks/useFilters";

function App() {
  const { apartments, isError, isLoading } = useApartments();
  const {
    filterCity,
    filterPrice,
    filteredApartments,
    onFilterByAvailability,
    onFilterByCity,
    onFilterByName,
    onFilterByPrice,
  } = useFilters(apartments);

  return (
    <section>
      <Filters
        filterCity={filterCity}
        filterPrice={filterPrice}
        onFilterByAvailability={onFilterByAvailability}
        onFilterByCity={onFilterByCity}
        onFilterByName={onFilterByName}
        onFilterByPrice={onFilterByPrice}
      />
      <Results
        filteredCity={filterCity}
        filteredResults={filteredApartments.length}
        totalResults={apartments.length}
      />
      {filteredApartments.length > 0 && (
        <>
          <section>
            <ApartmentList apartments={filteredApartments} />
          </section>
        </>
      )}

      {isLoading && <div>Loading...</div>}

      {!isLoading && isError && <div>Something went wrong</div>}

      {!isLoading && !isError && apartments.length === 0 && (
        <div>No apartments found</div>
      )}
    </section>
  );
}

export default App;
