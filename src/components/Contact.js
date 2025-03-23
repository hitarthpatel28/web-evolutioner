import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 80px 20px;
  background-color: #fff;
`;

const Contact = () => (
  <Section id="contact">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </Section>
);

export default Contact;