import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-[120px] font-bold text-amber-500 leading-none">
        404
      </h1>
      <p className="text-xl font-semibold mb-4 text-gray-800">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p className="text-gray-500 mb-6">
        It might have been moved or deleted, or the link could be incorrect.
      </p>
      <Link
        to="/"
        className="inline-block bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-all duration-200"
      >
        Go back to homepage
      </Link>
    </div>
  );
}
