import axios from "axios";

export default axios.create({
  baseURL: "//localhost:5001/api/v1",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
