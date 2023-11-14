import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavWrapper = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  background-color: rgba(18, 20, 23, 0.5);
`;

export const Img = styled.img`
  width: 100px;
  height: 40px;
  background-color: #1a1919;
`;

export const List = styled.ul`
  display: flex;
  color: white;
`;

export const ListItem = styled.li`
  margin: 0 10px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
`;
