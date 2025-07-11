import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";
import Banner from "@images/banner-countdown.webp";

export default function CountdownBanner() {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 22);
  targetDate.setMinutes(targetDate.getMinutes() + 53);
  targetDate.setSeconds(targetDate.getSeconds() + 1);

  return (
    <div className="relative h-100 w-full rounded overflow-hidden">
      {/* Image Background */}
      <img
        src={Banner}
        alt="Countdown Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional Overlay (semi-transparent dark) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 text-center">
        <CountdownTimer targetDate={targetDate} />
        <h3 className="text-xl sm:text-2xl md:text-3xl font-mono my-4">
          The Classics Make A Comeback
        </h3>
        <button className="bg-white text-black px-5 py-2 text-sm font-semibold rounded hover:bg-gray-100 transition">
          Buy now
        </button>
      </div>
    </div>
  );
}
