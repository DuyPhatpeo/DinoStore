export default function SectionHeading() {
  return (
    <div className="text-center px-4 py-10 sm:py-12 md:py-16">
      <p className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase mb-2">
        Don't Miss Super Offers
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 font-mono mb-4">
        Our best products
      </h2>

      <div className="flex justify-center items-center space-x-2">
        <span className="h-[1px] w-12 sm:w-16 bg-gray-300"></span>
        <span className="h-[2px] w-4 sm:w-6 bg-gray-400"></span>
        <span className="h-[1px] w-12 sm:w-16 bg-gray-300"></span>
      </div>
    </div>
  );
}
