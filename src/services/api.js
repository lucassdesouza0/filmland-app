import axios from "axios";

const api = () =>
  axios.create({
    baseURL: "https://localhosts",
    timeout: 120000
  });

export default api;
