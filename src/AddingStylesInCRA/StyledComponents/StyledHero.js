import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const Section = styled.section`
  padding: 25px;
  backround-color: #fff;
`;
const SectionTitle = styled.h2`
  text-align: center;
`;

const StyledHero = () => {
  return (
    <Section>
      <SectionTitle>Hellow101</SectionTitle>
      <StyledButton text='Click me' action={() => console.log('Hellow10')} />
    </Section>
  );
};

export default StyledHero;
