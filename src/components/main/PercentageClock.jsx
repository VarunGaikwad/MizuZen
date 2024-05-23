import PropTypes from "prop-types";

PercentageClock.propTypes = {
  className: PropTypes.string,
  date: PropTypes.object,
};

export default function PercentageClock({ className, date }) {
  const arugments = [9, 30, 18, 30],
    progress = calculatePercentage(arugments, date);

  return (
    <div className={`text-5xl ${className}`}>
      <span className="text-9xl">{progress}</span>
      <span>%</span>
    </div>
  );
}

function calculatePercentage(
  [startHour, startMin, endHour, endMin],
  currentDate
) {
  const [
      startHourInSeconds,
      startMinutesInSeconds,
      endHourInSeconds,
      endMinutesInSeconds,
      currentHourInSeconds,
      currentMinutesInSeconds,
    ] = [
      startHour * 3600,
      startMin * 60,
      endHour * 3600,
      endMin * 60,
      currentDate.getHours() * 3600,
      currentDate.getMinutes() * 60,
    ],
    totalSeconds =
      endHourInSeconds +
      endMinutesInSeconds -
      (startHourInSeconds + startMinutesInSeconds),
    secondsSinceStart =
      currentHourInSeconds +
      currentMinutesInSeconds -
      (startHourInSeconds + startMinutesInSeconds),
    progress = (secondsSinceStart / totalSeconds) * 100,
    result = Math.floor(progress);

  return result > 100 ? `+${result - 100}` : result;
}
