import { FiX, FiHeart } from "react-icons/fi";
import AnhDau from "@images/pro-1.jpg";

const mockWishlist = [
  {
    id: 1,
    name: "Ornare lectus sit",
    price: "$120.00",
    image: AnhDau,
  },
  {
    id: 2,
    name: "Nisl tempor sapien",
    price: "$87.50",
    image: AnhDau,
  },
];

export default function WishlistForm() {
  const handleRemove = (id) => {
    console.log("Remove item from wishlist:", id);
    // TODO: Handle remove from wishlist
  };

  return (
    <div className="w-full h-full px-6 pt-6 pb-4 flex flex-col text-[13px] font-mono text-gray-800">
      {/* Header */}
      <div className="text-center border-b pb-2 mb-6">
        <div className="flex justify-center items-center gap-2">
          <FiHeart className="text-lg" />
          <h2 className="text-base font-semibold tracking-widest uppercase">
            Wishlist
          </h2>
        </div>
      </div>

      {/* Wishlist items */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
        {mockWishlist.map((item) => (
          <div
            key={item.id}
            className="group relative flex items-center px-3 py-3 rounded-md transition duration-300 hover:bg-gray-100"
          >
            {/* Remove button */}
            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition"
            >
              <FiX className="text-gray-500 hover:text-red-500 text-sm" />
            </button>

            {/* Item content */}
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-28 aspect-square object-cover rounded-xl transform transition duration-300 group-hover:scale-105"
              />
              <div className="w-[170px]">
                <p className="font-semibold truncate">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Go to wishlist button */}
      <div className="mt-4">
        <button className="w-full bg-neutral-800 hover:bg-black text-white text-[12px] font-semibold tracking-wider py-2 uppercase rounded-sm transition">
          View Wishlist
        </button>
      </div>
    </div>
  );
}
