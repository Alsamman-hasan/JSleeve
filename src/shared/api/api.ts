import axios from 'axios';

export const $api = axios.create({
	baseURL: __API__,
});
const token = localStorage.getItem('tokenId');
$api.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
