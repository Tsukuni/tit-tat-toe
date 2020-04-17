// action creator
const SET_PLAYER = 'SET_PLAYER';
const SET_WINNER = 'SET_WINNER';
const RESET_APP_STATE = 'RESET_APP_STATE';


// action
export const setPlayer = player => ({ type: SET_PLAYER, payload: { player }});
export const setWinner = winner => ({ type: SET_WINNER, payload: { winner }});
export const resetAppState = () => ({ type: RESET_APP_STATE });
