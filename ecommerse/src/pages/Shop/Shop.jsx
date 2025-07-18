import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import MainLayout from "@components/Layout/Layout";
import HeroBanner from "@components/Shop/HeroBanner/HeroBanner";
import Breadcrumb from "@components/Shop/Breadcrumb/Breadcrumb";
import ListProduct from "@components/Shop/ListProduct/ListProduct";
import Filter from "@components/Shop/Filter/Filter";
import { useEffect, useState } from "react";
import { getProducts } from "@apis/productService";

// Map UI sort value → API sortType
const sortTypeMap = {
  default: 0,
  popularity: 1,
  rating: 2,
  latest: 3,
  price_asc: 4,
  price_desc: 5,
};

function Shop() {
  const [listProducts, setListProducts] = useState([]);
  const [sort, setSort] = useState("default");
  const [limit, setLimit] = useState(8);
  const [layout, setLayout] = useState("grid");
  const [page] = useState(1); // Nếu sau này cần phân trang

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          sortType: sortTypeMap[sort],
          page,
          ...(limit !== "all" && { limit }),
        };

        const res = await getProducts(params);
        setListProducts(res.contents); // hoặc res.data tuỳ response
      } catch (error) {
        console.error("Lỗi khi load sản phẩm:", error);
      }
    };

    fetchProducts();
  }, [sort, limit, page]);

  return (
    <>
      <Header />
      <MainLayout>
        <Breadcrumb />
        <HeroBanner />
        <Filter
          sort={sort}
          setSort={setSort}
          limit={limit}
          setLimit={setLimit}
          layout={layout}
          setLayout={setLayout}
        />
        <ListProduct data={listProducts} layout={layout} />
      </MainLayout>
      <Footer />
    </>
  );
}

export default Shop;
