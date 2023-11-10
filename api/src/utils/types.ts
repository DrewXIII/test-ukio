import { City as CityEnum } from "./enums";

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
