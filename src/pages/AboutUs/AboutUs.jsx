import FAQContent from "@components/AboutUs/FAQContent/FAQContent";
import ImageGallery from "@components/AboutUs/ImageGallery/ImageGallery";
import LogoStrip from "@components/AboutUs/LogoStrip/LogoStrip";
import SectionTitle from "@components/AboutUs/SectionTitle/SectionTitle";
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
        <SectionTitle />
        <ImageGallery />
        <LogoStrip />
        <FAQContent />
      </MainLayout>
      <Footer />
    </>
  );
}

export default AboutUs;
