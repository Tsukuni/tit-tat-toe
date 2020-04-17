// action creator
const SET_PLAYER = 'SET_PLAYER';
const SET_WINNER = 'SET_WINNER';
const RESET_APP_STATE = 'RESET_APP_STATE';


// action
export const setPlayer = player => ({ type: SET_PLAYER, payload: { player }});
export const setWinner = winner => ({ type: SET_WINNER, payload: { winner }});
export const resetAppState = () => ({ type: RESET_APP_STATE });

const INITIAL_STATE = {
  player: 2,
  winner: null,
};

// reducer
export const reducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PLAYER:
      return {
        ...state,
        player: payload.player
      };
    case SET_WINNER:
      return {
        ...state,
        winner: payload.winner
      };
    case RESET_APP_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}
