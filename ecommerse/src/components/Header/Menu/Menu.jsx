import React from "react";

function Menu({ items }) {
  return (
    <ul className="flex gap-4 text-sm font-medium text-gray-700">
      {items.map((item, idx) => (
        <li key={idx}>
          <a href={item.url} className="hover:text-black">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
