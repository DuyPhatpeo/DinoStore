import ContactForm from "@components/Contact/ContactForm/ContactForm";
import Info from "@components/Contact/Info/Info";
import Map from "@components/Contact/Map/Map";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";

function Contact() {
  return (
    <>
      <Header />
      <MainLayout>
        <Map />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="md:col-span-1">
            <Info />
          </div>
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </MainLayout>

      <Footer />
    </>
  );
}

export default Contact;
