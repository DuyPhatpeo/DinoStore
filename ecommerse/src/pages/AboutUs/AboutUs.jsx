import Breadcrumb from "@components/common/Breadcrumb/Breadcrumb";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";

function AboutUs() {
  return (
    <>
      <Header />
      <MainLayout>
        <Breadcrumb items={["Home", "About Us"]} />
      </MainLayout>
      <Footer />
    </>
  );
}

export default AboutUs;
