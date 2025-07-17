import { useLocation } from "react-router-dom";
import { navLinks } from "../contants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Menu() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex flex-col space-y-3 md:flex-row md:items-center md:space-y-0 md:space-x-6">
      {navLinks.map((link, index) => {
        const isActive = currentPath === link.href;

        return (
          <motion.a
            key={index}
            href={link.href}
            className={`relative text-lg font-semibold transition-colors ${
              isActive ? "text-black" : "text-gray-800"
            }`}
            whileHover="hover"
            initial="rest"
            animate={isActive ? "hover" : "rest"}
          >
            {link.name}
            <motion.span
              className="absolute left-0 bottom-0 h-[2px] w-full bg-[#333]"
              variants={{
                rest: { scaleX: 0, originX: 1 },
                hover: { scaleX: 1, originX: 0, transition: { duration: 0.3 } },
              }}
              style={{ display: "block" }}
            />
          </motion.a>
        );
      })}
    </nav>
  );
}
