import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #333;
  color: #fff;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 Web Evolutioner | All Rights Reserved</p>
  </FooterContainer>
);

export default Footer;