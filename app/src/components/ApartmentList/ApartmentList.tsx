import { Apartment } from "../../utils/types";
import ApartmentDetail from "../ApartmentDetail/ApartmentDetail";

type Props = {
  apartments: Array<Apartment>;
};

const ApartmentList = ({ apartments = [] }: Props) => {
  return (
    <ul className="grid grid-cols-4 gap-8">
      {apartments.length > 0 &&
        apartments.map((apartment) => (
          <ApartmentDetail key={apartment.id} {...apartment} />
        ))}
    </ul>
  );
};

export default ApartmentList;
