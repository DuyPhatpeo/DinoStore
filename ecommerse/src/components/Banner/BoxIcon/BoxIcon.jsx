import { FiTruck, FiCreditCard, FiRepeat, FiPhone } from "react-icons/fi";

const boxIcons = [
  { icon: FiTruck, label: "Fastest Shipping", sub: "Order at $39 order" },
  {
    icon: FiCreditCard,
    label: "100% Safe Payments",
    sub: "9 month installments",
  },
  { icon: FiRepeat, label: "14-Days Return", sub: "Shop with confidence" },
  { icon: FiPhone, label: "24/7 Online Support", sub: "Delivered to home" },
];

export default function BoxIcon() {
  return (
    <div className="bg-[#333] text-white mx-auto w-[50%] rounded shadow-md px-6 py-4">
      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-4">
        {boxIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center space-y-1">
              <Icon size={20} />
              <span className="text-sm font-semibold">{item.label}</span>
              <span className="text-xs text-gray-300">{item.sub}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
