import { FiX } from "react-icons/fi";
import AnhDau from "@images/pro-1.jpg"; // Ảnh mock

const cartItems = [
  {
    id: 1,
    name: "10K Yellow Gold - M",
    price: 99.99,
    quantity: 1,
    sku: "12345",
    image: AnhDau,
  },
];

export default function Cart() {
  const handleRemove = (id) => {
    console.log("Remove item with id:", id);
    // TODO: implement remove logic
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full h-full px-6 pt-6 pb-4 flex flex-col font-mono text-gray-800 text-[13px]">
      {/* Header */}
      <div className="text-center border-b pb-2 mb-6">
        <div className="flex justify-center items-center gap-2">
          <span className="text-2xl">🛒</span>
          <h2 className="text-base font-semibold tracking-widest uppercase">
            Cart
          </h2>
        </div>
      </div>

      {/* Product list */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="group relative flex items-center px-3 py-3 rounded-md transition hover:bg-gray-100"
          >
            <button
              onClick={() => handleRemove(item.id)}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition"
            >
              <FiX className="text-gray-500 hover:text-red-500 text-sm" />
            </button>

            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 aspect-square object-cover rounded-xl group-hover:scale-105 transition"
              />
              <div className="w-[180px]">
                <p className="font-semibold truncate">{item.name}</p>
                <p className="text-gray-700 text-sm">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
                <p className="text-gray-500 text-xs">SKU: {item.sku}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal & Actions */}
      <div className="mt-6 space-y-4">
        <div className="flex justify-between text-sm text-gray-700">
          <span className="uppercase tracking-widest">Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <button className="w-full bg-neutral-800 hover:bg-black text-white text-[12px] font-semibold tracking-wider py-2 uppercase rounded-sm transition">
          View Cart
        </button>

        <button className="w-full border border-black text-[12px] text-black font-semibold tracking-wider py-2 uppercase rounded-sm transition hover:bg-black hover:text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}
