import { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "@components/Loading/Loading";
import ScrollToTopButton from "@components/ScrollToTopButton/ScrollToTopButton";
import routers from "@routers/routers";
import { SideBarProvider } from "@contexts/SideBarProvider";
import { ToastProvider } from "@contexts/ToastProvider";
import Sidebar from "@components/Sidebar/Sidebar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mô phỏng loading khi khởi động app
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <SideBarProvider>
      <ToastProvider>
        <BrowserRouter>
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <Routes>
              {routers.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={<item.component />}
                />
              ))}
            </Routes>
            <ScrollToTopButton />
          </Suspense>
        </BrowserRouter>
      </ToastProvider>
    </SideBarProvider>
  );
}

export default App;
