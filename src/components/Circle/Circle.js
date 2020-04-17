import React from 'react';
import styled from 'styled-components';

const Circle = ({ color }) => (
  <Container color={color}/>
);

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export default Circle;