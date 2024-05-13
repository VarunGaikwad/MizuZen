import PropTypes from "prop-types";

BinaryClock.propTypes = {
  className: PropTypes.string,
  date: PropTypes.object,
};
export default function BinaryClock({ className, date }) {
  const [hours, minutes, seconds] = date.toTimeString().slice(0, 8).split(":"),
    binaryTime = {
      hours,
      minutes,
      seconds,
    };

  return (
    <div className={`flex gap-10 ${className}`}>
      <BinarySection time={binaryTime.hours} first={2} second={4} />
      <BinarySection time={binaryTime.minutes} first={3} second={4} />
      <BinarySection time={binaryTime.seconds} first={3} second={4} />
    </div>
  );
}

BinarySection.propTypes = {
  time: PropTypes.string,
  first: PropTypes.number,
  second: PropTypes.number,
};

function BinarySection({ time, first, second }) {
  const [one, two] = time.split("");
  return (
    <div className="flex gap-5">
      <Cells onoff={one} number={first} />
      <Cells onoff={two} number={second} />
    </div>
  );
}

Cells.propTypes = {
  onoff: PropTypes.string,
  number: PropTypes.number,
};

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
