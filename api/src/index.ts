import express from "express";
import apartmentData from "./db/apartments.json";
import { Apartment } from "./utils/types";

const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/api/apartments", (_, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const apartments: Array<Apartment> = apartmentData as Array<Apartment>;
    
  res.send(apartments);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});