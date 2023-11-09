import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { StyledDiv } from "./FormSelectors.styled";

const FormSelectors = () => {
  const [car, setCar] = useState("");
  const [price, setPrice] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const handleCarChange = (event) => {
    setCar(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleFromChange = (event) => {
    setFromValue(event.target.value);
  };

  const handleToChange = (event) => {
    setToValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledDiv>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Car Brand</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={car}
            label="Car Brand"
            onChange={handleCarChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Price</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={price}
            label="Price"
            onChange={handlePriceChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <input
          type="text"
          placeholder="From"
          value={fromValue}
          onChange={handleFromChange}
        />
        <input
          type="text"
          placeholder="To"
          value={toValue}
          onChange={handleToChange}
        />
        <button type="submit">Search</button>
      </StyledDiv>
    </form>
  );
};

export default FormSelectors;
