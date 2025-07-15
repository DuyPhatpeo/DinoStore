import { FiX } from "react-icons/fi";
import { MdAutorenew } from "react-icons/md";
import AnhDau from "@images/pro-1.jpg";

const mockProducts = [
  {
    id: 1,
    name: "Hendrerit enim molestie",
    price: "$38.99",
    image: AnhDau,
  },
  {
    id: 2,
    name: "Est suspendisse neque",
    price: "$290.20",
    image: AnhDau,
  },
];

export default function CompareForm() {
  const handleRemove = (id) => {
    console.log("Remove item with id:", id);
    // TODO: handle remove logic
  };

  return (
    <div className="w-full h-full px-6 pt-6 pb-4 flex flex-col text-[13px] font-mono text-gray-800">
      {/* Header */}
      <div className="text-center border-b pb-2 mb-6">
        <div className="flex justify-center items-center gap-2">
          <MdAutorenew className="text-lg" />
          <h2 className="text-base font-semibold tracking-widest uppercase">
            Compare
          </h2>
        </div>
      </div>

      {/* Product list */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className="group relative flex items-center px-3 py-3 rounded-md transition duration-300 hover:bg-gray-100"
          >
            {/* Nút X nằm góc phải của card */}
            <button
              onClick={() => handleRemove(product.id)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition"
            >
              <FiX className="text-gray-500 hover:text-red-500 text-sm" />
            </button>

            {/* Nội dung sản phẩm */}
            <div className="flex items-center space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-28 aspect-square object-cover rounded-xl transform transition duration-300 group-hover:scale-105"
              />
              <div className="w-[170px]">
                <p className="font-semibold truncate">{product.name}</p>
                <p className="text-gray-600 text-sm">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Compare Button */}
      <div className="mt-4">
        <button className="w-full bg-neutral-800 hover:bg-black text-white text-[12px] font-semibold tracking-wider py-2 uppercase rounded-sm transition">
          View Compare
        </button>
      </div>
    </div>
  );
}
