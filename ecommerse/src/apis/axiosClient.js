import axios from "axios";

const axiosClientt = axios.create({
  baseURL: "https://be-project-reactjs.onrender.com/api-docs/#/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default axiosClientt;
