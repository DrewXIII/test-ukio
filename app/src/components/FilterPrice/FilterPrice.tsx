import { Slider } from "@mui/material";
import { PRICE } from "../../constants";

type Props = {
  values: [number, number];
  onFilter: (range: [number, number]) => void;
};

export const FilterPrice = ({ values, onFilter }: Props) => {
  return (
    <div className="">
      <Slider
        defaultValue={0}
        value={values}
        onChange={(e) => {
          onFilter(e.target.value);
        }}
        valueLabelDisplay="auto"
        disableSwap
        max={PRICE.MAX}
        min={PRICE.MIN}
        step={100}
      />
    </div>
  );
};
