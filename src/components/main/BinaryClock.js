"use client";

import { useState, useEffect } from "react";

export default function BinaryClock() {
  const [binaryTime, setBinaryTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(function () {
      const [hours, minutes, seconds] = new Date()
        .toTimeString()
        .slice(0, 8)
        .split(":");
      setBinaryTime({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row gap-10">
      <BinarySection time={binaryTime.hours} first={2} second={4} />
      <BinarySection time={binaryTime.minutes} first={3} second={4} />
      <BinarySection time={binaryTime.seconds} first={3} second={4} />
    </div>
  );
}

function BinarySection({ time, first, second }) {
  const [one, two] = time.split("");
  return (
    <div className="flex gap-5">
      <Cells onoff={one} number={first} />
      <Cells onoff={two} number={second} />
    </div>
  );
}

function Cells({ onoff, number }) {
  const loop = [...Array(4 - number).fill(0), ...Array(number).fill(1)],
    binary = onoff.toBinary();

  return (
    <div className="flex flex-col gap-5">
      {loop.map((item, idx) => (
        <span
          key={idx}
          className={`${item ? "bg-slate-100" : ""} ${
            binary[idx] === "1" ? "bg-opacity-100" : "bg-opacity-25"
          } h-6 w-3 rounded-xl`}
        />
      ))}
    </div>
  );
}

String.prototype.toBinary = function () {
  return Number(this >>> 0)
    .toString(2)
    .padStart(4, "0");
};
