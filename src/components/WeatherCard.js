import { useContext } from "react";

import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.js";
import { weatherOptions } from "../utils/constants.js";
import { temperature } from "../utils/weatherApi.js";

function WeatherCard({ day, weatherType, temp }) {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.weatherType === weatherType;
  });

  const imgSrcUrl = weatherOption.url || "";

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const currentTemp = temperature(temp)[currentTemperatureUnit];

  return (
    <section className="weather" id="weather-section">
      <div className="weather__temp">
        {currentTemp}&deg;{currentTemperatureUnit}
      </div>
      <img src={imgSrcUrl} alt="Weather Type" className="weather__image" />
    </section>
  );
}

export default WeatherCard;
