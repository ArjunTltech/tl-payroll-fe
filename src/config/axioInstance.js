import axios from "axios";
import useAuthStore from "../store/authStore";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState(); 
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
