export const toggleModal = modal => {
	console.log(modal);
	return {
		type: 'TOGGLE_MODAL',
		payload: modal.toLowerCase()
	};
};
