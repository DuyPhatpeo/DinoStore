import { useEffect, useState, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "@components/Loading/Loading";
import routers from "@routers/routers";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mô phỏng loading khi khởi động
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routers.map((item, index) => (
            <Route path={item.path} element={<item.component />} key={index} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
