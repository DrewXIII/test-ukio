import { City } from "../../utils/types";
import { City as CityEnum } from "../../utils/enums";

type Props = {
  value: City;
  onFilter: (city: City) => void;
};

export const FilterCity = ({ value, onFilter }: Props) => {
  return (
    <select
      name="city"
      defaultValue={value}
      onChange={(e) => {
        onFilter(e.target.value as City);
      }}
    >
      <option value={CityEnum.Barcelona}>Barcelona</option>
      <option value={CityEnum.Lisbon}>Lisbon</option>
      <option value={CityEnum.Madrid}>Madrid</option>
    </select>
  );
};
