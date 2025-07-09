import MainLayout from "@components/Layout/Layout";
import MyHeader from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";

function App() {
  return (
    <div>
      <MainLayout>
        <MyHeader />
        <MyFooter />
      </MainLayout>
    </div>
  );
}

export default App;
