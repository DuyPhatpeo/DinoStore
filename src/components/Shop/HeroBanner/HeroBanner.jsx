import Banner from "@images/Background.jpeg";

export default function CountdownBanner() {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 22);
  targetDate.setMinutes(targetDate.getMinutes() + 53);
  targetDate.setSeconds(targetDate.getSeconds() + 1);

  return (
    <div className="relative w-full overflow-hidden rounded h-64">
      {/* Image Background */}
      <img
        src={Banner}
        alt="Countdown Banner"
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-neutral-900">
        <h3 className="my-4 font-mono text-xl sm:text-2xl md:text-3xl font-semibold">
          The Classics Make A Comeback
        </h3>
        <button className="px-5 py-2 text-sm font-semibold text-white transition bg-neutral-900 rounded hover:bg-neutral-700">
          Buy now
        </button>
      </div>
    </div>
  );
}
