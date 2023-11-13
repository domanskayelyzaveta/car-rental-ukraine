import React, { useState } from "react";
import { FormControl, MenuItem } from "@mui/material";
import {
  FromToDiv,
  SearchBtn,
  StyleInputLabel,
  StyledDiv,
  StyledLabel,
  StyledLeftInput,
  StyledRightInput,
  StyledSelect,
} from "./FormSelectors.styled";

import { useDispatch } from "react-redux";
import makes from "../Makes/makes.json";
import {
  setFilter,
  setMileageFrom,
  setMileageTo,
  setPriceFilter,
} from "../../Redux/carReducer";

const FormSelectors = () => {
  const [car, setCar] = useState("");
  const [price, setPrice] = useState("");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const dispatch = useDispatch();

  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFromChange = (event) => {
    setFromValue(event.target.value);
  };

  const handleToChange = (event) => {
    setToValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilter(event.target.elements.brand.value));
    dispatch(setPriceFilter(event.target.elements.price.value));
    dispatch(setMileageFrom(event.target.elements.from.value));
    dispatch(setMileageTo(event.target.elements.to.value));
  };

  const makesPriceOptions = () => {
    const optionsArray = [];
    for (let i = 10; i < 300; i += 10) {
      optionsArray.push(i);
    }
    return optionsArray;
  };

  const optionsPrice = makesPriceOptions();

  return (
    <form onSubmit={handleSubmit}>
      <StyledDiv>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <StyledLabel>Car brand</StyledLabel>
          <StyledSelect
            labelId="demo-select-small-label"
            id="demo-select-small"
            displayEmpty
            value={car}
            name="brand"
            onChange={handleCarChange}
            height={48}
            width={224}
          >
            <MenuItem value="">
              <em>Enter the text</em>
            </MenuItem>
            {makes.map((car, index) => (
              <MenuItem key={index} value={car}>
                {car}
              </MenuItem>
            ))}
          </StyledSelect>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <StyledLabel>Price/ 1 hour</StyledLabel>
          <StyledSelect
            labelId="demo-select-small-label"
            id="demo-select-small"
            displayEmpty
            value={price}
            name="price"
            onChange={handlePriceChange}
            width={124}
            height={48}
          >
            <MenuItem value="">
              <em>to $</em>
            </MenuItem>
            {optionsPrice.map((price, index) => {
              return (
                <MenuItem key={index} value={price}>
                  {price}
                </MenuItem>
              );
            })}
          </StyledSelect>
        </FormControl>
        <div>
          <StyleInputLabel htmlFor="from-input">
            Сar mileage / km
          </StyleInputLabel>
          <FromToDiv>
            <StyledLeftInput
              type="text"
              placeholder="From"
              name="from"
              value={fromValue}
              onChange={handleFromChange}
            />
            <StyledRightInput
              type="text"
              name="to"
              placeholder="To"
              value={toValue}
              onChange={handleToChange}
            />
            <SearchBtn type="submit">Search</SearchBtn>
          </FromToDiv>
        </div>
      </StyledDiv>
    </form>
  );
};

export default FormSelectors;
