import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navbar = styled.nav`
  height: 60px;
  background: linear-gradient(to right, #ffcc33, #ffb347);
  opacity: 1;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const Logo = styled(Link)`
  color: orange;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
`;
const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  font-size: 1.2rem;
  &:hover{
    color: orange;
  }
`;  

const Header = () => {
  return (
    <Navbar>
      <Logo to="/funart">
        Fun Art
      </Logo>
      <NavItems>
        <NavbarLink to="/fun-art">Home</NavbarLink>
        <NavbarLink to="/fun-art/about">About</NavbarLink>
        <NavbarLink to="/fun-art/services">Services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
