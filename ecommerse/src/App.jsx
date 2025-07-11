import { useEffect, useState } from "react";
import HomePage from "@components/HomePage/HomePage";
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
      {!loading && <HomePage />}
    </>
  );
}

export default App;
