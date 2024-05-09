import React from "react";
import DuckDuckGoSearchBar from "./DuckDuckGoSearchBar";
import WeatherInfo from "./WeatherInfo";
import ImportantLinks from "./ImportantLinks";

export default function HeaderToolbar() {
  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="w-1/12"></div>
        <DuckDuckGoSearchBar />
        <WeatherInfo />
      </div>
      <ImportantLinks />
    </div>
  );
}
