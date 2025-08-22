import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL,
   headers: { 'Content-Type': 'application/json' },
});

// 요청
axiosInstance.interceptors.request.use(
   (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
         config.headers = config.headers || {};
         config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
   },
   (error) => Promise.reject(error),
);

// 응답
axiosInstance.interceptors.response.use(
   (res) => res,
   (err) => {
      if (err?.response?.status === 401) {
         localStorage.removeItem('accessToken');
         localStorage.removeItem('memberId');
         localStorage.removeItem('oauthName');
         localStorage.removeItem('profileImg');
         if (typeof window !== 'undefined') {
            window.location.href = '/login';
         }
      }
      return Promise.reject(err);
   },
);

export default axiosInstance;
