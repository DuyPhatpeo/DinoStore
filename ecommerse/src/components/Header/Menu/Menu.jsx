import { NAV_LINKS } from "../contants";

export default function Menu() {
  return (
    <nav className="hidden space-x-6 md:flex">
      {NAV_LINKS.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className="text-gray-700 hover:text-black"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
