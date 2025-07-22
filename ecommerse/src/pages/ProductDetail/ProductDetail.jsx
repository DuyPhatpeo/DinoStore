import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import Footer from "@components/Footer/Footer";
import Breadcrumb from "@components/common/Breadcrumb/Breadcrumb";

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
