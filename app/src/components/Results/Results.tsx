import { City } from "../../utils/types";

type Props = {
  filteredCity: City;
  filteredResults: number;
  totalResults: number;
};

export const Results = ({
  filteredCity,
  filteredResults,
  totalResults,
}: Props) => {
  return (
    <h3 className="p-4">
      {filteredResults} of {totalResults} in {filteredCity}
    </h3>
  );
};
