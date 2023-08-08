import { useState } from "react";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { MapPin } from "lucide-react";
import {
  Sun,
  CloudFog,
  CloudSun,
  Cloudy,
  CloudDrizzle,
  CloudRain,
  CloudRainWind,
  CloudSunRain,
  CloudSnow,
} from "lucide-react";

const initialWeatherState = {
  location: "Barcelona",
  weather: "clouds",
  description: "few clouds 11-25%",
  sunset: "21:00",
  sunrise: "07:00",
  temperature: "31.34",
  feels: "34.1254",
  humidity: "70",
};

function WeatherCard() {
  const [city, setCity] = useState("Badalona");
  const [weather, setWeather] = useState(initialWeatherState);

  return (
    <>
      <div className="flex flex-col gap-2 p-4 rounded-md border-2 border-blue-300">
        <div id="weather-current" className="flex items-center gap-4">
          <div className="flex items-center w-10 h-10 rounded-full border-2">
            <Cloudy className="mx-auto align-middle" />
          </div>
          <div id="weather-type">
            <p>WEATHER</p>
            <p>{weather.weather}</p>
          </div>
          <div id="weather-desc">
            <p>DESCRIPTION</p>
            <p>{weather.description}</p>
          </div>
        </div>

        <Separator />

        <div id="weather-sun-city" className="flex gap-4">
          <div id="sunset-time">
            <p>SUNSET</p>
            <p>{weather.sunset}</p>
          </div>
          <div id="sunrise-time">
            <p>SUNRISE</p>
            <p>{weather.sunrise}</p>
          </div>
          <div id="location-card">
            <p>LOCATION</p>
            <div className="flex">
              <MapPin />
              <p>{weather.location}</p>
            </div>
          </div>
        </div>

        <div id="weather-temperature" className="flex gap-4">
          <div id="temp-real">
            <p>TEMPERATURE</p>
            <p>{weather.temperature}</p>
          </div>
          <div id="temp-feel">
            <p>FEELS LIKE</p>
            <p>{weather.feels}</p>
          </div>
        </div>

        <div id="weather-humidity" className="flex flex-col gap-1 items-end">
          <p>{weather.humidity}% humidity</p>
          <Progress value={+weather.humidity} />
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
