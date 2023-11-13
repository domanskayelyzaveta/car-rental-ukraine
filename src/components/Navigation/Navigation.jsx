import React from "react";
import { List, ListItem, NavWrapper, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavWrapper>
      <List>
        <ListItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </ListItem>
      </List>
    </NavWrapper>
  );
};

export default Navigation;
