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
    <div className="bg-[#333] text-white w-full max-w-6xl mx-auto rounded shadow-md px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {boxIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-2 sm:p-3 lg:p-4"
            >
              <Icon size={24} className="mt-1 shrink-0" />
              <div className="text-left">
                <div className="text-sm font-semibold sm:text-base">
                  {item.label}
                </div>
                <div className="text-xs text-gray-300 sm:text-sm">
                  {item.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
