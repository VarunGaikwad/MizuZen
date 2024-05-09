import getWeatherInfo from "@/external_call/weather";

import React from "react";
import { HiMiniMoon } from "react-icons/hi2";
import { MdSunny } from "react-icons/md";

export default async function WeatherInfo() {
  const {
      name,
      main: { temp },
    } = await getWeatherInfo(),
    hour = new Date().getHours();

  return (
    <div className="w-1/12 flex flex-col items-end">
      <div className="flex items-center gap-2">
        {hour >= 18 && hour <= 6 ? (
          <HiMiniMoon size={25} />
        ) : (
          <MdSunny size={25} />
        )}
        <span className="text-2xl tracking-wider">
          {Math.floor(temp)}&deg;C
        </span>
      </div>

      <span className="text-xs">{name}</span>
    </div>
  );
}
