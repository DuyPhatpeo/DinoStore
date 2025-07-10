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
    <div className="flex space-x-2">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white text-black px-3 py-1 text-sm font-mono rounded shadow"
        >
          <span className="font-bold">
            {String(item.value).padStart(2, "0")}
          </span>{" "}
          {item.label}
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
