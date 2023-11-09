import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  //   Img,
  List,
  ListItem,
  NavWrapper,
  //   StyledLink,
} from "./Navigation.styled";
// import logo from "../../images/logo.jpg";

const Navigation = () => {
  return (
    <NavWrapper>
      <Link to="/">{/* <Img src={logo} alt="logo" /> */}</Link>
      <List>
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/catalog">Catalog</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/favorites">Favorites</NavLink>
        </ListItem>
      </List>
    </NavWrapper>
  );
};

export default Navigation;
