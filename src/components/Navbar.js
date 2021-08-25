import React from "react";
import {
  Nav,
  LeftLinks,
  RightLinks,
  NavLinks,
  Menu,
  UserProfile,
} from "../styles/NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <LeftLinks>
        <NavLinks to="/about">About</NavLinks>
        <NavLinks to="/store">Store</NavLinks>
      </LeftLinks>
      <RightLinks>
        <NavLinks to="/gmail">Gmail</NavLinks>
        <NavLinks to="/images">Images</NavLinks>
        <NavLinks to="/">
          <Menu />
        </NavLinks>
        <NavLinks to="/">
          <UserProfile />
        </NavLinks>
      </RightLinks>
    </Nav>
  );
};

export default Navbar;
