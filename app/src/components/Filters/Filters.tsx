import { Availability, City } from "../../utils/types";
import { FilterAvailability } from "../FilterAvailability/FilterAvailability";
import { FilterCity } from "../FilterCity/FilterCity";
import { FilterName } from "../FilterName/FilterName";
import { FilterPrice } from "../FilterPrice/FilterPrice";

type Props = {
  filterCity: City;
  filterPrice: [number, number];
  onFilterByAvailability: (type: Availability | null) => void;
  onFilterByCity: (city: City) => void;
  onFilterByName: (name: string) => void;
  onFilterByPrice: (range: [number, number]) => void;
};

export const Filters = ({
  filterCity,
  filterPrice,
  onFilterByAvailability,
  onFilterByCity,
  onFilterByName,
  onFilterByPrice,
}: Props) => {
  return (
    <section>
      <FilterAvailability onFilter={onFilterByAvailability} />
      <FilterCity value={filterCity} onFilter={onFilterByCity} />
      <FilterName onFilter={onFilterByName} />
      <FilterPrice values={filterPrice} onFilter={onFilterByPrice} />
    </section>
  );
};
