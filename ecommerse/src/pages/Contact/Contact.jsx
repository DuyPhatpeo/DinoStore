import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";

function Contact() {
  return (
    <>
      <Header />
      <MainLayout>
        <div>
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        </div>
      </MainLayout>
      <Footer />
    </>
  );
}

export default Contact;
