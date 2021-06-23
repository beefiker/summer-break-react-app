import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/",
});

export const cityApi = {
  getAll: () => api.get(`all`),
  getSelectedCities: (tag) => api.get(`city/${tag}`),
  getSearchedCities: (term) => api.get(`search/${term}`),
  getDetail: (cityname) => api.get(`detail/${cityname}`),
};

export const tagApi = {
  getAllTags: () => api.get(`tags`),
};
