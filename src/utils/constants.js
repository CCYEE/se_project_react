import sunnyDay from "../images/day/sunny.svg";
import cloudyDay from "../images/day/cloudy.svg";
import rainyDay from "../images/day/rain.svg";
import stormDay from "../images/day/storm.svg";
import snowDay from "../images/day/snow.svg";
import foggyDay from "../images/day/fog.svg";
import clearNight from "../images/night/night-moon.svg";
import cloudyNight from "../images/night/night-cloud.svg";
import rainyNight from "../images/night/night-rain.svg";
import stormNight from "../images/night/night-storm.svg";
import snowNight from "../images/night/night-snow.svg";
import foggyNight from "../images/night/night-fog.svg";

export const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});
export const apiKey = "9966b3564a314e82d57a5d0accfbc3eb";
export const latitude = 44.34;
export const longitude = 10.99;
export const ESC_KEYCODE = 27;
export const baseUrl = "http://localhost:3001";
export const weatherOptions = [
  {
    url: sunnyDay,
    day: true,
    weatherType: "sunny",
  },
  {
    url: cloudyDay,
    day: true,
    weatherType: "cloudy",
  },
  {
    url: rainyDay,
    day: true,
    weatherType: "rain",
  },
  {
    url: stormDay,
    day: true,
    weatherType: "storm",
  },
  {
    url: snowDay,
    day: true,
    weatherType: "snow",
  },
  {
    url: foggyDay,
    day: true,
    weatherType: "fog",
  },
  {
    url: clearNight,
    day: false,
    weatherType: "clear",
  },
  {
    url: cloudyNight,
    day: false,
    weatherType: "cloudy",
  },
  {
    url: rainyNight,
    day: false,
    weatherType: "rain",
  },
  {
    url: stormNight,
    day: false,
    weatherType: "storm",
  },
  {
    url: snowNight,
    day: false,
    weatherType: "snow",
  },
  {
    url: foggyNight,
    day: false,
    weatherType: "fog",
  },
];
