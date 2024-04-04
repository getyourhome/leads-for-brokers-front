import axios from "axios";

export default axios.create({
  baseURL: "//localhost:8000",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
