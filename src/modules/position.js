// action creator
const SET_POSITION = 'SET_POSITION';
const RESET_POSITION = 'RESET_POSITION';

// action
export const setPosition = (key, value) => ({ type: SET_POSITION, payload: { key, value }});
export const resetPosition = () => ({ type: RESET_POSITION });


const INITIAL_STATE = {
  topLeft: null,
  topCenter: null,
  topRight: null,
  centerLeft: null,
  center: null,
  centerRight: null,
  bottomLeft: null,
  bottomCenter: null,
  bottomRight: null,
};

// reducer
export const reducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_POSITION:
      return {
        ...state,
        [payload.key]: payload.value
      };
    case RESET_POSITION:
      return INITIAL_STATE;
    default:
      return state;
  }
}
