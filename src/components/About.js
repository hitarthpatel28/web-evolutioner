import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: #f4f4f4;
`;

const About = () => (
  <Section id="about">
    <h2>About Us</h2>
    <p>We specialize in custom websites and digital solutions for small businesses and e-commerce brands. Our goal is to help you grow online and evolve with the digital world.</p>
  </Section>
);

export default About;