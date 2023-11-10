import { Availability as AvailabilityEnum } from "../../utils/enums";
import { Availability } from "../../utils/types";

type Props = {
  onFilter: (type: Availability | null) => void;
};

export const FilterAvailability = ({ onFilter }: Props) => {
  return (
    <div>
      <button onClick={() => onFilter(AvailabilityEnum.Week)}>Next week</button>
      <button onClick={() => onFilter(AvailabilityEnum.Month)}>
        Next month
      </button>
      <button onClick={() => onFilter(null)}>Reset</button>
    </div>
  );
};
