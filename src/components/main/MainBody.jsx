import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import PercentageClock from "./PercentageClock";
import BinaryClock from "./BinaryClock";
import { LuBinary } from "react-icons/lu";
import { FaPercentage } from "react-icons/fa";

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
      <div className="flex items-center">
        {activeClock === "Percentage" ? (
          <PercentageClock
            date={date}
            className={
              activeClock === "Percentage" ? "clock fade-in" : "clock fade-out"
            }
          />
        ) : (
          <BinaryClock
            date={date}
            className={
              activeClock === "Binary" ? "clock fade-in" : "clock fade-out"
            }
          />
        )}
        <button
          className="ml-20"
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
    </div>
  );
}
