import React from 'react';
import Box from '../Box';
import styled from 'styled-components';

const Board = ({ position, onClick }) => (
  <Container>
    <Box name="topLeft" player={position.topLeft} onClick={onClick} />
    <Box name="topCenter" player={position.topCenter} onClick={onClick} />
    <Box name="topRight" player={position.topRight} onClick={onClick} />

    <Box name="centerLeft" player={position.centerLeft} onClick={onClick} />
    <Box name="center" player={position.center} onClick={onClick} />
    <Box name="centerRight" player={position.centerRight} onClick={onClick} />

    <Box name="bottomLeft" player={position.bottomLeft} onClick={onClick} />
    <Box name="bottomCenter" player={position.bottomCenter} onClick={onClick} />
    <Box name="bottomRight" player={position.bottomRight} onClick={onClick} />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  background-color: green;
`;

export default Board;
