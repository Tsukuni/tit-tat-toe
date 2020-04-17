// action creator
const SET_POSITION = 'SET_POSITION';
const RESET_POSITION = 'RESET_POSITION';

// action
export const setPosition = (key, value) => ({ type: SET_POSITION, payload: { key, value }});
export const resetPosition = () => ({ type: RESET_POSITION });
