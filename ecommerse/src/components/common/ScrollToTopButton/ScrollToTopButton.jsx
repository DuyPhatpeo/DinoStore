import { FiArrowUp } from "react-icons/fi";
import useScrollVisibility from "@hooks/useScrollVisibility";

export default function ScrollToTopButton() {
  const visible = useScrollVisibility(300); // hoặc tuỳ threshold

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      title="Lên đầu trang"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black text-white shadow-lg hover:bg-amber-600 transition-colors"
    >
      <FiArrowUp className="text-xl" />
    </button>
  );
}
