import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";

export default function Breadcrumb({ items = [] }) {
  const lastIndex = items.length - 1;

  return (
    <nav className="flex items-center flex-wrap gap-x-1 text-base text-gray-500 mt-8">
      {items.map((label, index) => {
        const isLast = index === lastIndex;
        const path =
          index === 0
            ? "/" // phần tử đầu là Home
            : "/" +
              items
                .slice(1, index + 1)
                .join("/")
                .toLowerCase();

        return (
          <span key={index} className="flex items-center gap-x-1">
            {index !== 0 && <FiChevronRight className="text-gray-400" />}
            {isLast ? (
              <span className="font-medium text-gray-900">{label}</span>
            ) : (
              <Link to={path} className="hover:underline text-gray-500">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
