import React, { useState } from "react";
import { ButtonWrapper, StyledLoadMoreButton } from "./ButtonLoadMore.styled";
import { useDispatch, useSelector } from "react-redux";
import { getCarThunk } from "../../Redux/thunks";
import {
  selectAllCars,
  selectCarsData,
  selectHasMorePages,
} from "../../Redux/selectors";

const ButtonLoadMore = () => {
  const dispatch = useDispatch();
  const hasMorePages = useSelector(selectHasMorePages);
  const carsData = useSelector(selectCarsData);
  const allCarsData = useSelector(selectAllCars);

  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    dispatch(getCarThunk(page));
    setPage(page + 1);
  };

  const shouldHideButton =
    !hasMorePages || carsData.length < 1 || allCarsData.length < 1;

  return (
    <ButtonWrapper>
      {!shouldHideButton && (
        <StyledLoadMoreButton type="button" onClick={handleLoadMore}>
          Load More
        </StyledLoadMoreButton>
      )}
    </ButtonWrapper>
  );
};
export default ButtonLoadMore;
