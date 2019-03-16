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
