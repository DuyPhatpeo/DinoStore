import { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import MainLayout from "@components/Layout/Layout";
import ListProduct from "@components/ListProduct/ListProduct";

import { getProducts } from "@/apis/productService";

function HomePage() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res.contents);
    });
  }, []);
  // console.log(listProducts, "listProducts");
  return (
    <>
      <Header />
      <Banner />
      <SectionHeading />
      <MainLayout>
        <CountdownBanner />
        <ListProduct data={listProducts} />
      </MainLayout>
    </>
  );
}

export default HomePage;
