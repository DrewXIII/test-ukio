import { PRICE } from "../../constants";
import { City as CityEnum } from "../../utils/enums";
import { Availability, City } from "../../utils/types";
import { FilterAvailability } from "../FilterAvailability/FilterAvailability";
import { FilterCity } from "../FilterCity/FilterCity";
import { FilterName } from "../FilterName/FilterName";
import { FilterPrice } from "../FilterPrice/FilterPrice";

type Props = {
  filterCity: City;
  filterName: string;
  filterPrice: [number, number];
  onFilterByAvailability: (type: Availability | null) => void;
  onFilterByCity: (city: City) => void;
  onFilterByName: (name: string) => void;
  onFilterByPrice: (range: [number, number]) => void;
};

export const Filters = ({
  filterCity,
  filterName,
  filterPrice,
  onFilterByAvailability,
  onFilterByCity,
  onFilterByName,
  onFilterByPrice,
}: Props) => {
  const onReset = () => {
    onFilterByAvailability(null);
    onFilterByCity(CityEnum.Madrid);
    onFilterByName("");
    onFilterByPrice([PRICE.MIN, PRICE.MAX]);
  };

  return (
    <section>
      <FilterAvailability onFilter={onFilterByAvailability} />
      <FilterCity value={filterCity} onFilter={onFilterByCity} />
      <FilterName value={filterName} onFilter={onFilterByName} />
      <FilterPrice values={filterPrice} onFilter={onFilterByPrice} />
      <button onClick={onReset}>Reset</button>
    </section>
  );
};
