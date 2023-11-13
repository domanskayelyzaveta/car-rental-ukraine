import axios from "axios";

const BASE_URL = "https://654bf66d5b38a59f28eff756.mockapi.io";
const $instance = axios.create({ baseURL: BASE_URL });

export const fetchCatalog = async (page = 1, limit = 12) => {
  const { data } = await $instance.get("/adverts", {
    params: {
      page: page,
      limit: limit,
    },
  });
  return data;
};
export const fetchAllCatalog = async () => {
  const { data } = await $instance.get("/adverts");
  return data;
};

export const getCarById = async (id) => {
  const { data } = await $instance.get(`/adverts/${id}`);
  return data;
};
