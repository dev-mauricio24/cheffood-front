import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const getRequest = (url, token) =>
  axios.get(`${API_URL}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },
  });
