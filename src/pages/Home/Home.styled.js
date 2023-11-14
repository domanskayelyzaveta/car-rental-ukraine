import styled from "@emotion/styled";
import car from "../../images/car1.jpg";
import { Link } from "react-router-dom";

export const StyledHomePage = styled.div`
  overflow: hidden;
  height: 96vh;
  background: url(${car}) no-repeat center center fixed;
  background-size: cover;
  position: relative;

  color: white;
  padding: 0px;
`;

export const StyledRentLink = styled(Link)`
  margin-top: 20px;
  color: white;
`;

export const StyledTitle = styled.h2`
  color: rgba(255, 255, 255, 0.5);
`;
export const StyledTextSpan = styled.p`
  width: 200px;
  font-size: 10px;
  font-style: normal;
  margin-bottom: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
`;

export const TitleWrapper = styled.div`
  width: 250px;
  padding: 30px;
  display: flex;
`;
export const LinkArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddressContainer = styled.div`
  width: 400px;
`;
export const Address = styled.address`
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

export const ContactLink = styled.a`
  font-size: 12px;

  text-decoration: none;
  font-style: normal;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledUl = styled.ul`
  padding: 0px;
`;

export const StyledUkraine = styled.span`
  color: white;
`;
