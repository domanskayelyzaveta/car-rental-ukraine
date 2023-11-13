import React, { useState } from "react";
import { ButtonWrapper, StyledLoadMoreButton } from "./ButtonLoadMore.styled";
import { useDispatch, useSelector } from "react-redux";
import { getCarThunk } from "../../Redux/thunks";
import {
  selectAllCars,
  selectCarsData,
  selectHasMorePages,
  selectsFilteredMake,
} from "../../Redux/selectors";

const ButtonLoadMore = () => {
  const dispatch = useDispatch();
  const hasMorePages = useSelector(selectHasMorePages);
  const CarsData = useSelector(selectCarsData);
  const Filtered = useSelector(selectsFilteredMake);
  const [page, setPage] = useState(2);

  const handleLoadMore = () => {
    dispatch(getCarThunk(page));
    setPage(page + 1);
  };

  const shouldHideButton =
    !hasMorePages && CarsData.length <= 0 && Filtered.length <= 0;

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
