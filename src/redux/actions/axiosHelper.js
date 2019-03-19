import axios from 'axios';
const baseApiUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3001/api'
		: 'http://localhost:3001/api'; //hard coded for now - use env var later

const instance = axios.create();

const requests = {
	authenticateUser: () => {
		return instance.post(`${baseApiUrl}/auth`, { userdata: true });
	}
};

export { requests };
