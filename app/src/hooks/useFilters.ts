import { useMemo, useState } from "react";
import {
  Availability as AvailabilityEnum,
  City as CityEnum,
} from "../utils/enums";
import { Apartment, Availability, City } from "../utils/types";
import { PRICE } from "../constants";
import { belongsToNextMonth, belongsToNextWeek } from "../helpers/dates";

export const useFilters = (apartments: Array<Apartment>) => {
  const [filterAvailability, setFilterAvailability] =
    useState<Availability | null>();
  const [filterCity, setFilterCity] = useState<City>(CityEnum.Madrid);
  const [filterName, setFilterName] = useState<string>("");
  const [filterPrice, setFilterPrice] = useState<[number, number]>([
    PRICE.MIN,
    PRICE.MAX,
  ]);

  const onFilterByAvailability = (availabilityType: Availability | null) => {
    setFilterAvailability(availabilityType);
  };
  const onFilterByCity = (city: City) => {
    setFilterCity(city);
  };
  const onFilterByName = (name: string) => {
    setFilterName(name);
  };
  const onFilterByPrice = (range: [number, number]) => {
    setFilterPrice(range);
  };

  const filteredApartments = useMemo(() => {
    const filterApartmentsByName = (apartments: Apartment[]) => {
      return typeof filterName === "string" && filterName.length > 0
        ? apartments.filter((apartment) => {
            return apartment.name
              .toLowerCase()
              .includes(filterName.toLowerCase());
          })
        : apartments;
    };

    const isSelectedCity = (apartment: Apartment) => {
      return apartment.city.toLowerCase() === filterCity;
    };

    const isInPriceRange = (apartment: Apartment) => {
      return (
        apartment.price <= filterPrice[1] && apartment.price >= filterPrice[0]
      );
    };

    const isAvailable = (apartment: Apartment) => {
      const parsedDate = Date.parse(apartment.availability);
      const date = new Date(parsedDate);

      if (filterAvailability === AvailabilityEnum.Week) {
        return belongsToNextWeek(date);
      }

      if (filterAvailability === AvailabilityEnum.Month) {
        return belongsToNextMonth(date);
      }

      return apartments;
    };

    return filterApartmentsByName(apartments)
      .filter(isSelectedCity)
      .filter(isInPriceRange)
      .filter(isAvailable);
  }, [filterAvailability, filterCity, filterName, filterPrice, apartments]);

  return {
    filterAvailability,
    filterCity,
    filterName,
    filterPrice,
    filteredApartments,
    onFilterByAvailability,
    onFilterByCity,
    onFilterByName,
    onFilterByPrice,
  };
};
