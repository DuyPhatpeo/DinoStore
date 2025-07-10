import logo from "@images/Logo.png";

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Dino Store Logo"
        className="h-10 w-10 sm:h-10 sm:w-10 object-contain"
      />
      <span className="text-xl font-semibold text-gray-800 sm:text-2xl">
        Dino Store
      </span>
    </div>
  );
}
