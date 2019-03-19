export const gameState = (
	state = {
		activeModals: {
			inventory: true,
			player: false,
			help: false,
			journal: false
		}
	},
	action
) => {
	switch (action.type) {
		case 'TOGGLE_MODAL':
			console.log(action);
			return {
				...state,
				activeModals: {
					...state.activeModals,
					[action.payload]: !state.activeModals[action.payload]
				}
			};

		default:
			return state;
	}
};

export const userState = (
	state = {
		user: {},
		isAuthenticated: true
	},
	action
) => {
	switch (action.type) {
		case 'SET_AUTHENTICATED':
			return {
				...state,
				isAuthenticated: action.payload
			};

		default:
			return state;
	}
};
