import { Availability as AvailabilityEnum } from "./enums";
import { City as CityEnum } from "./enums";

export type Availability = AvailabilityEnum.Month | AvailabilityEnum.Week;
export type City = CityEnum.Barcelona | CityEnum.Lisbon | CityEnum.Madrid;

export type Apartment = {
  availability: string;
  bathrooms: number;
  bedrooms: number;
  city: City;
  id: number;
  name: string;
  price: number;
};
