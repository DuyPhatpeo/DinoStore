import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-[120px] font-bold text-amber-500 leading-none">
        404
      </h1>
      <p className="text-xl font-semibold mb-4 text-gray-800">
        Oops! Trang bạn tìm không tồn tại.
      </p>
      <p className="text-gray-500 mb-6">
        Có thể đường dẫn bị sai, hoặc trang đã bị xoá.
      </p>
      <Link
        to="/"
        className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all duration-200"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}
