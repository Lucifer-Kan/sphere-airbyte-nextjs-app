import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const sphereAccessToken = localStorage.getItem("sphereAccessToken");
    if (sphereAccessToken) {
      config.headers.Authorization = `Bearer ${sphereAccessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;
    if (
      originalConfig.url !== "/login" &&
      error.response &&
      error.response.status === 401
    ) {
      localStorage.removeItem("sphereAccessToken");
      localStorage.removeItem("userId");
      delete axios.defaults.headers.common.Authorization;
      return Promise.reject(
        (error.response && error.response.data) || "Something went wrong!"
      );
    }
  }
);

export default axiosInstance;
