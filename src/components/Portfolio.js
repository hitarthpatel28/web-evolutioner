import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: #f4f4f4;
`;

const Portfolio = () => (
  <Section id="portfolio">
    <h2>Our Work</h2>
    <div>
      <div>Project 1</div>
      <div>Project 2</div>
      <div>Project 3</div>
    </div>
  </Section>
);

export default Portfolio;