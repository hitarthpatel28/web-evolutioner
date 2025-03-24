import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logo  from "../assets/images/logo-3.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  color: #000;
  align-items: center;
`;

const Header = () => (
  <HeaderContainer>
    <div><img src={Logo} width={300}/></div>
    <nav>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="services" smooth={true} duration={500}>Services</Link>
      <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  </HeaderContainer>
);

export default Header;