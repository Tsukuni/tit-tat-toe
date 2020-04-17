import React from 'react';
import Board from '../../components/Board';
import { useSelector, useDispatch } from 'react-redux';
import { setPosition } from '../../modules/position';
import { setPlayer } from '../../modules/appState';


const BoardContainer = () => {
  const { position, appState } = useSelector(hoge => hoge);

  const dispatch = useDispatch();

  const handleClick = event => {
    const { id } = event.target;
    const { player } = appState;
    const nextPlayer = player === 2 ? 1 : 2;

    dispatch(setPosition(id, player));
    dispatch(setPlayer(nextPlayer));
  }

  return <Board position={position} onClick={handleClick} />
}

export default BoardContainer;
