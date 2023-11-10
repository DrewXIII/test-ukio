import { Apartment } from "../utils/types";

export const fetchApartments = async () => {
  return await fetch("http://localhost:3000/api/apartments")
    .then(async (response) => {
      if (!response.ok) throw Error("Error in the request");

      return await response.json();
    })
    .then((data: Apartment[]) => {
      return data;
    });
};
