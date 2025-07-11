import { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import MainLayout from "@components/Layout/Layout";
import ListProduct from "@components/ListProduct/ListProduct";

import { getProducts } from "@/apis/productService";
import HeroBanner from "@components/HeroBanner/HeroBanner";
import Footer from "@components/Footer/Footer";

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
      <MainLayout>
        <SectionHeading />
        <CountdownBanner />
        <ListProduct data={listProducts} />
        <HeroBanner />
      </MainLayout>
      <Footer />
    </>
  );
}

export default HomePage;
