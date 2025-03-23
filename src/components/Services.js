import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: #fff;
`;

const ServiceCard = styled.div`
  display: inline-block;
  width: 30%;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`;

const Services = () => (
  <Section id="services">
    <h2>Our Services</h2>
    <div>
      <ServiceCard>
        <h3>Web Development</h3>
        <p>Custom websites built to meet your business goals.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>UI/UX Design</h3>
        <p>Beautiful and intuitive designs for your digital presence.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>SEO & Performance</h3>
        <p>We optimize your website for better performance and search rankings.</p>
      </ServiceCard>
    </div>
  </Section>
);

export default Services;