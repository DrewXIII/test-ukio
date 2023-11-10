import { useQuery } from "react-query";
import { fetchApartments } from "../services/apartments";
import { Apartment } from "../utils/types";

export const useApartments = () => {
  const {
    data: apartments = [],
    isError,
    isLoading,
  } = useQuery<Apartment[]>(["apartments"], fetchApartments);

  return {
    apartments,
    isError,
    isLoading,
  };
};
