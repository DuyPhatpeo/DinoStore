import MainLayout from "@components/Layout/Layout";
import Header from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";

function App() {
  return (
    <div>
      <MainLayout>
        <Header />
        <MyFooter />
      </MainLayout>
    </div>
  );
}

export default App;
