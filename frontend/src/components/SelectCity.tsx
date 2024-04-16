import React, { useReducer, useEffect } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent
} from "@mui/material";

type SelectCityProps = {
  city: string;
  changeCity: (city: string) => void;
}


const SelectCity: React.FC<SelectCityProps> = ({city, changeCity}) => {
  const handleChange = (event: SelectChangeEvent) => {
    changeCity(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Typography sx={{ m: 2 }}>
          Showing Events in
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            label="Select an option"
            onChange={handleChange}
          >
            <MenuItem value="pune">Pune</MenuItem>
            <MenuItem value="mumbai">Mumbai</MenuItem>
            <MenuItem value="panjim">Panjim</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>

  );
};

export default SelectCity;
