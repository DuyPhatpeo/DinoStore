import { useEffect, useState } from "react";
import Header from "@components/Header/Header";
import Banner from "@components/Home/Banner/Banner";
import SectionHeading from "@components/Home/SectionHeading/SectionHeading";
import CountdownBanner from "@components/Home/CountdownBanner/CountdownBanner";
import MainLayout from "@components/Layout/Layout";
import ListProduct from "@components/Home/ListProduct/ListProduct";

import { getProducts } from "@/apis/productService";
import HeroBanner from "@components/Home/HeroBanner/HeroBanner";
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
