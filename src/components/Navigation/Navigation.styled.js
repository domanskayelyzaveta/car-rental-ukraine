import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

export const Img = styled.img`
  width: 100px;
  height: 40px;
  background-color: #1a1919;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin: 0 10px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    font-weight: bold;
  }
`;
