import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Header = () => (
  <HeaderContainer>
    <div>Web Evolutioner</div>
    <nav>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="services" smooth={true} duration={500}>Services</Link>
      <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  </HeaderContainer>
);

export default Header;