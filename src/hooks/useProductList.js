// File: @hooks/useProductList.js

import { useEffect, useState } from "react";
import { getProducts } from "@apis/productService";

// Custom hook để quản lý danh sách sản phẩm với sorting, pagination, layout
export default function useProductList() {
  // State lưu danh sách sản phẩm
  const [listProducts, setListProducts] = useState([]);

  // State lưu loại sắp xếp đang chọn (ví dụ: default, rating, latest,...)
  const [sort, setSort] = useState("default");

  // Số sản phẩm mỗi trang
  const [limit, setLimit] = useState(8);

  // Trang hiện tại
  const [page, setPage] = useState(1);

  // Tổng số trang (được tính sau khi fetch sản phẩm)
  const [totalPage, setTotalPage] = useState(1);

  // Kiểu layout hiển thị sản phẩm (grid hoặc list)
  const [layout, setLayout] = useState("grid");

  // Trạng thái loading khi gọi API
  const [loading, setLoading] = useState(false);

  // Gọi API mỗi khi sort, limit, hoặc page thay đổi
  useEffect(() => {
    fetchProducts();
  }, [sort, limit, page]);

  // Gọi API để lấy danh sách sản phẩm
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await getProducts({
        sortType: mapSortToAPI(sort),
        page,
        limit: limit === "all" ? 1000 : limit,
      });

      const newProducts = res.contents || [];
      setListProducts(newProducts);

      // Tính tổng số trang dựa vào total product count từ backend
      const totalCount = res.total || 0;
      const pages = Math.ceil(totalCount / limit);
      setTotalPage(pages);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Hàm xử lý chuyển trang (có kiểm tra giới hạn)
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setPage(newPage);
    }
  };

  // Chuyển đổi giá trị sort từ frontend sang giá trị mà API backend hiểu được
  const mapSortToAPI = (value) => {
    switch (value) {
      case "popularity":
        return 2;
      case "rating":
        return 1;
      case "latest":
        return 3;
      case "price_asc":
        return 4;
      case "price_desc":
        return 5;
      default:
        return 0;
    }
  };

  // Trả về các state và handler để sử dụng tại component Shop
  return {
    listProducts,
    sort,
    setSort,
    limit,
    setLimit,
    page,
    totalPage,
    layout,
    setLayout,
    loading,
    handlePageChange,
  };
}
