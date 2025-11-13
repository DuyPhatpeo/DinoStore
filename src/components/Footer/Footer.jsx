export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white py-10 px-4 font-mono">
      {/* Logo + Tagline */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Dino Store</h2>
        <p className="text-sm text-gray-400">Your Jurassic Shopping Spot</p>
      </div>

      {/* Navigation Links */}
      <nav className="mb-6">
        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          {["Home", "Products", "Deals", "About Us", "Contact", "Compare"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © 2025 Dino Store. Designed by Trần Duy Phát
      </div>
    </footer>
  );
}
