import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default CustomAxios;
