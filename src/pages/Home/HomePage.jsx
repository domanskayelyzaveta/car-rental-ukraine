import React from "react";
import {
  Address,
  AddressContainer,
  ContactLink,
  LinkArrowWrapper,
  StyledHomePage,
  StyledRentLink,
  StyledTextSpan,
  StyledTitle,
  StyledUkraine,
  StyledUl,
  TitleWrapper,
} from "./Home.styled";

const HomePage = () => {
  return (
    <StyledHomePage>
      <LinkArrowWrapper>
        <StyledRentLink to="/catalog">Rent now &#10230;</StyledRentLink>
      </LinkArrowWrapper>
      <TitleWrapper>
        <StyledTitle>
          Welcome to the car rental page in
          <StyledUkraine>Ukraine</StyledUkraine>, the best quality, the best
          service, made with love for you!
        </StyledTitle>
      </TitleWrapper>
      <AddressContainer>
        <Address>
          <StyledTextSpan>
            To get more detailed information, you can contact us from Monday to
            Friday, from 8:00 AM to 6:00 PM.
          </StyledTextSpan>
          <StyledUl>
            <li>
              <ContactLink href="tel:+380684439426">
                +380 (68) 000-00-00
              </ContactLink>
            </li>
            <li>
              <ContactLink
                href="https://maps.app.goo.gl/s2q7onW4eGD3ZEdr5"
                target="_blank"
                rel="noopener noreferrer"
              >
                вулиця Сонячна б.123, Київ, Україна 123456
              </ContactLink>
            </li>
          </StyledUl>
        </Address>
      </AddressContainer>
    </StyledHomePage>
  );
};

export default HomePage;
