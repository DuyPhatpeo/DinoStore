import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export default function Info() {
  return (
    <div className="w-full max-w-md mx-auto md:mx-0 bg-white border border-gray-200 rounded-2xl shadow-md p-6 md:p-8 space-y-6">
      <h3 className="text-2xl font-extrabold text-gray-800">Information</h3>

      <ul className="text-sm md:text-base text-gray-600 space-y-6">
        <li className="flex items-start gap-3">
          <FaMapMarkerAlt className="mt-1 text-gray-700 shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 mb-1">Address</p>
            <p>
              18 Tran Mai Ninh Street
              <br />
              Vinh Hai Ward, Nha Trang City
              <br />
              Khanh Hoa 650000, Vietnam
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <FaPhoneAlt className="mt-1 text-gray-700 shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 mb-1">Contact</p>
            <p>
              +84 91 234 5678
              <br />
              contact@dinostore.vn
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <FaClock className="mt-1 text-gray-700 shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 mb-1">Opening Hours</p>
            <p>Monday – Sunday: 9:00 AM – 6:00 PM</p>
          </div>
        </li>
      </ul>

      <div className="border-t pt-4 flex items-center space-x-4 text-2xl text-gray-700">
        <a
          href="#"
          className="hover:text-blue-600 transition transform hover:scale-110"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="hover:text-sky-500 transition transform hover:scale-110"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="hover:text-pink-500 transition transform hover:scale-110"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:text-red-500 transition transform hover:scale-110"
          aria-label="Pinterest"
        >
          <FaPinterestP />
        </a>
      </div>
    </div>
  );
}
