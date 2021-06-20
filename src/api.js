import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/",
});

export const cityApi = {
  getAll: () => api.get(`all`),
  getSelectedCities: (tag) => api.get(`city/${tag}`),
};

export const tagApi = {
  getAllTags: () => api.get(`tags`),
};
