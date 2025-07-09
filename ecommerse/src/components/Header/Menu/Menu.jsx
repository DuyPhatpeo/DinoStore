import { navLinks } from "../contants";

export default function Menu() {
  return (
    <nav className="flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="relative text-sm transition-colors duration-200 group hover:text-black"
        >
          {link.name}
          {/* Gạch dưới hiệu ứng chạy từ phải sang trái */}
          <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-black transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
        </a>
      ))}
    </nav>
  );
}
