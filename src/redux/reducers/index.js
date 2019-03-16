import { combineReducers } from 'redux';

import { gameState } from './reducers';

export default combineReducers({
	gameState: gameState
});
