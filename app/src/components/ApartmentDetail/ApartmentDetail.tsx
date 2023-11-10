import { Apartment } from "../../utils/types";

type Props = Apartment;

const ApartmentDetail = ({
  availability,
  bathrooms,
  bedrooms,
  name,
  price,
}: Props) => {
  return (
    <li>
      <article className="p-4 border-2">
        <div className="p-4 border-2">
          <div>{name}</div>
          <div>
            {bedrooms} bedrooms | {bathrooms} bathrooms
          </div>
        </div>
        <div className="flex flex-row justify-between box-border p-4 border-2">
          <div>€ {price}</div>
          <div>{availability}</div>
        </div>
      </article>
    </li>
  );
};

export default ApartmentDetail;
