"use client";

import React, { useState, useEffect, useMemo } from "react";

export default function PercentageClock() {
  const arugments = useMemo(() => [10, 0, 19, 30], []),
    [progress, setProgress] = useState(calculatePercentage(arugments));

  useEffect(() => {
    setProgress(calculatePercentage(arugments));
  }, [arugments]);

  return (
    <div className="text-5xl">
      <span className="text-9xl">{progress}</span> <span>%</span>
    </div>
  );
}

function calculatePercentage([startHour, startMin, endHour, endMin]) {
  const currentDate = new Date(),
    [
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
    progress = (secondsSinceStart / totalSeconds) * 100;

  return Math.floor(progress);
}
