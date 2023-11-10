import "./App.css";
import { useApartments } from "./hooks/useApartments";

function App() {
  const { apartments, isError, isLoading } = useApartments();

  return (
    <section>
      {isLoading && <div>Loading...</div>}

      {!isLoading && isError && <div>Something went wrong</div>}

      {!isLoading && !isError && apartments.length === 0 && (
        <div>No apartments found</div>
      )}
    </section>
  );
}

export default App;
