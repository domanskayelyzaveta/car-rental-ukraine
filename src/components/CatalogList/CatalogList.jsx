import React from "react";
import { useSelector } from "react-redux";
import { selectCarsData } from "../../Redux/selectors";
import plug from "../../images/plug2.jpg";
import {
  ButtonWrapper,
  CarInfoWrapper,
  CarMainInfoDiv,
  Img,
  LearnMoreButton,
  LoadMoreButton,
  Paragraph,
  StyledLi,
  StyledUl,
} from "./CatalogList.styled";

const CatalogList = () => {
  const carsData = useSelector(selectCarsData);

  return (
    <div>
      <StyledUl>
        {carsData.map((car) => {
          const address = car.address;
          const wordArr = address.split(" ");
          const lastWord = wordArr[wordArr.length - 1];
          const beforLastWord = wordArr[wordArr.length - 2];

          return (
            <StyledLi key={car.id}>
              <Img src={car.img || plug} alt={car.make} />
              <CarMainInfoDiv>
                <p>
                  {car.make}, {car.year}
                </p>
                <p>{car.rentalPrice}</p>
              </CarMainInfoDiv>
              <CarInfoWrapper>
                <Paragraph>{beforLastWord}</Paragraph>
                <Paragraph>{lastWord}</Paragraph>
                <Paragraph>{car.rentalCompany}</Paragraph>
                <Paragraph>{car.type}</Paragraph>
                <Paragraph>{car.make}</Paragraph>
                <Paragraph>{car.mileage}</Paragraph>
                <Paragraph>{car.accessories[0]}</Paragraph>
              </CarInfoWrapper>
              <LearnMoreButton>Learn more</LearnMoreButton>
            </StyledLi>
          );
        })}
      </StyledUl>
      <ButtonWrapper>
        <LoadMoreButton>Load More</LoadMoreButton>
      </ButtonWrapper>
    </div>
  );
};

export default CatalogList;
