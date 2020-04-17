import React from 'react';
import Circle from '../Circle';
import styled from 'styled-components';

const Box = ({ name, player, onClick }) => (
  <Container id={name} onClick={onClick}>
    { player && <Circle color={player === 2 ? 'black' : 'white' } />}
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  box-sizing: border-box;
`

export default Box;