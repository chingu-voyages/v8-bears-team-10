import { combineReducers } from 'redux';

import { gameState, userState } from './reducers';

export default combineReducers({
	gameState: gameState,
	userState: userState
});
