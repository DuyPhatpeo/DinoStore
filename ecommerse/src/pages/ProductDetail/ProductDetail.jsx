import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import Footer from "@components/Footer/Footer";
import Breadcrumb from "@components/common/Breadcrumb/Breadcrumb";
import ProductGallery from "@components/ProductDetail/ProductGallery/ProductGallery";
import ProductInfo from "@components/ProductDetail/ProductInfo/ProductInfo";

function HomePage() {
  return (
    <>
      <Header />
      <MainLayout>
        <Breadcrumb items={["Home", "Men"]} />
      </MainLayout>
      <Footer />
    </>
  );
}

export default HomePage;
