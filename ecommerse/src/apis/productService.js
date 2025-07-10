/* eslint-disable no-undef */
import axiosClientt from "./axiosClient";
const getProducts = async () => {
  const res = await axiosClientt.get("/product");
};

export { getProducts };
