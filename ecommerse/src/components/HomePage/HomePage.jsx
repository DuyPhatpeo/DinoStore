import Banner from "@components/Banner/Banner";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import SectionHeading from "@components/SectionHeading/SectionHeading";
import { useEffect } from "react";
import { getProducts } from "@/apis/productService";
import ProductCard from "@components/ProductCard/ProductCard";
import ListProduct from "@components/ListProduct/ListProduct";

function HomePage() {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <SectionHeading />
      <MainLayout>
        <CountdownBanner />
        <ListProduct />
      </MainLayout>
    </>
  );
}

export default HomePage;
