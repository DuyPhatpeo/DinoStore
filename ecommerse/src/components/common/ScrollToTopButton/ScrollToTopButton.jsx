import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import useScrollVisibility from "@hooks/useScrollVisibility";

export default function ScrollToTopButton() {
  const visible = useScrollVisibility(300);
  const [scrollPercent, setScrollPercent] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min(100, (scrollTop / docHeight) * 100);
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const radius = 22;
  const stroke = 3;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      title="Back to top"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:bg-amber-600 transition-all duration-300 group"
    >
      {/* SVG Progress Circle */}
      <svg
        className="absolute w-full h-full rotate-[-90deg]"
        viewBox="0 0 48 48"
      >
        <circle
          stroke="#facc15"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx="24"
          cy="24"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 ease-out"
        />
      </svg>

      {/* Arrow Icon */}
      <FiArrowUp className="text-2xl relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
