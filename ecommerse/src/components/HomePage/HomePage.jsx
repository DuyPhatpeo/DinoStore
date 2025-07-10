import Banner from "@components/Banner/Banner";
import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import SectionHeading from "@components/SectionHeading/SectionHeading";

function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <SectionHeading />
      <MainLayout>
        <CountdownBanner />
      </MainLayout>
    </>
  );
}

export default HomePage;
