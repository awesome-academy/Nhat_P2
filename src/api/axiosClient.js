import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
    }
    return response.data;
  },
  (error) => {
    // Case 1: Networking
    if (error.response) {
      return error.response.data;
    }
    // Case 2: Network Error
    else {
      throw error;
    }
  }
);
export default axiosClient;
