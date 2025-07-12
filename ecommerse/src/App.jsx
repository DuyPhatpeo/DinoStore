import { useEffect, useState } from "react";
import Home from "@components/Home/Home";
import Loading from "@components/Loading/Loading"; // đường dẫn tuỳ bạn

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mô phỏng quá trình tải dữ liệu hoặc khởi động trang
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && <Home />}
    </>
  );
}

export default App;
