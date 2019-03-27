import { requests } from './axiosHelper';
export const toggleModal = modal => {
	return {
		type: 'TOGGLE_MODAL',
		payload: modal.toLowerCase()
	};
};

// placeholder, this will be replaced with axios calls to backend with login data
export const handleLogin = isAuthenticated => async dispatch => {
	try {
		const res = await requests.authenticateUser();
		const auth = res.data.auth;
		dispatch({ type: 'SET_AUTHENTICATED', payload: auth });
	} catch (err) {
		// throw error
	}
};

export const handleLogout = modal => {
	return {
		type: 'SET_AUTHENTICATED',
		payload: false
	};
};
