import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/",
});

export const cityApi = {
  test: () => api.get("test"),
};
