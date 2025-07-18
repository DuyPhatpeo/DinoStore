import axiosClient from "./axiosClient";

const getProducts = async (params = {}) => {
  const res = await axiosClient.get("/product", { params });
  return res.data;
};

export { getProducts };
