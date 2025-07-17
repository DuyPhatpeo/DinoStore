import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import Banner from "@images/banner-countdown.webp";

export default function CountdownBanner() {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 22);
  targetDate.setMinutes(targetDate.getMinutes() + 53);
  targetDate.setSeconds(targetDate.getSeconds() + 1);

  return (
    <div className="relative w-full overflow-hidden rounded h-100">
      {/* Image Background */}
      <img
        src={Banner}
        alt="Countdown Banner"
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />

      {/* Optional Overlay (semi-transparent dark) */}
      <div className="absolute inset-0 z-10 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <CountdownTimer targetDate={targetDate} />
        <h3 className="my-4 font-mono text-xl sm:text-2xl md:text-3xl">
          The Classics Make A Comeback
        </h3>
        <button className="px-5 py-2 text-sm font-semibold text-black transition bg-white rounded hover:bg-gray-100">
          Buy now
        </button>
      </div>
    </div>
  );
}
