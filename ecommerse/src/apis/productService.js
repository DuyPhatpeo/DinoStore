import axiosClient from "./axiosClient";

// Lấy tất cả sản phẩm có filter, sort, v.v.
const getProducts = async (params = {}) => {
  const res = await axiosClient.get("/product", { params });
  return res.data;
};

const getProductById = async (productId) => {
  if (!productId) throw new Error("productId is required");

  const res = await axiosClient.get(`/product/${productId}`);
  return res.data;
};

export { getProducts, getProductById };
