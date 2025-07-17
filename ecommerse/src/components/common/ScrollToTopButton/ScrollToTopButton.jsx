import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import useScrollVisibility from "@hooks/useScrollVisibility";

export default function ScrollToTopButton() {
  const visible = useScrollVisibility(100);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(100, (scrollTop / docHeight) * 100);
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const stroke = 2.5;
  const normalizedRadius = radius - stroke;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      title="Lên đầu trang"
      className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors group"
    >
      <svg
        className="absolute w-full h-full rotate-[-90deg] pointer-events-none"
        viewBox="0 0 40 40"
      >
        <circle
          stroke="#fde047" // yellow-400
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="20"
          cy="20"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 0.3s ease-out",
          }}
        />
      </svg>

      <FiArrowUp className="text-base relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
