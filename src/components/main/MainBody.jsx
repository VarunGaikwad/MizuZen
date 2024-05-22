import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import PercentageClock from "./PercentageClock";
import BinaryClock from "./BinaryClock";
import { LuBinary } from "react-icons/lu";
import { FaPercentage } from "react-icons/fa";
import JapaneseWord from "./JapaneseWord";

export default function MainBody() {
  const [date, setDate] = useState(new Date()),
    [activeClock, setActiveClock] = useState("Percentage"),
    size = 25 * 1.5;

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-4 justify-center items-center">
      <div className="flex items-center gap-10">
        <div></div>
        <div className="flex-1 flex flex-col items-center">
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
                return "Binary";
              }
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
