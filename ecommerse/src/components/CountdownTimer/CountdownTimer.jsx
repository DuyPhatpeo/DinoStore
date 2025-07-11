import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return <p className="text-sm text-red-500">Deal expired!</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-2 sm:gap-3 sm:mb-4">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white text-black px-3 py-2 text-xs sm:text-sm md:text-base font-mono rounded shadow-md min-w-[60px] text-center"
        >
          <div className="text-lg font-bold sm:text-xl md:text-2xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="uppercase text-[10px] sm:text-xs text-gray-600">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function getTimeRemaining(target) {
  const total = Date.parse(target) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}
