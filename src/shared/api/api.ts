import axios from 'axios';

export const $api = axios.create({
	baseURL: __API__,
});
const token = localStorage.getItem('tokenId');
$api.interceptors.request.use((config) => {
	if (config.headers && token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});
$api.interceptors.response.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (originalRequest.url !== '/auth/refresh' && error.response) {
			if (error.response.status === 401) {
				localStorage.clear();
				sessionStorage.clear();
			}
		}
		return Promise.reject(error);
	}
);
