import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import PercentageClock from "./PercentageClock";
import BinaryClock from "./BinaryClock";
import { LuBinary } from "react-icons/lu";
import { FaPercentage } from "react-icons/fa";
import JapaneseWord from "./JapaneseWord";

export default function MainBody() {
  const [date, setDate] = useState(new Date()),
    clockType = localStorage.getItem("clockType"),
    [activeClock, setActiveClock] = useState(clockType || "Percentage"),
    size = 25 * 1.5;

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="mt-20 flex-1 flex flex-col justify-center items-center">
      <div className="flex items-center gap-10">
        <div></div>
        <div className="flex flex-col items-center">
          <div
            className={`absolute z-10 transition-opacity duration-1000 ${
              activeClock === "Percentage"
                ? "opacity-100 ease-in"
                : "opacity-0 ease-out"
            }`}
          >
            <PercentageClock date={date} />
          </div>
          <div
            className={`transition-opacity duration-1000 ${
              activeClock === "Binary"
                ? "opacity-100 ease-in"
                : "opacity-0 ease-out"
            }`}
          >
            <BinaryClock date={date} />
          </div>
        </div>
        <button
          onClick={() =>
            setActiveClock((prev) => {
              if (prev === "Percentage") {
                localStorage.setItem("clockType", "Binary");
                return "Binary";
              }
              localStorage.setItem("clockType", "Percentage");
              return "Percentage";
            })
          }
        >
          {activeClock === "Percentage" ? (
            <LuBinary size={size} />
          ) : (
            <FaPercentage size={size} />
          )}
        </button>
      </div>
      <Greeting date={date} />
      <JapaneseWord />
    </div>
  );
}
