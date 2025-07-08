import "./App.css";
import Hello from "@components/Hello/Hello";
import Button from "@components/Button/Button";
import MainLayout from "./components/Layout/Layout";
import MyHeader from "./components/Header/Header";
import MyFooter from "./components/Footer/Footer";

function App() {
  return (
    <>
      <MainLayout>
        <MyHeader />
        Content
        <MyFooter />
      </MainLayout>
    </>
  );
}

export default App;
