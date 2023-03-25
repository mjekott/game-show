import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4acba2972c9a4f86940cd1d4d0106279",
  },
});

export default axiosClient;
