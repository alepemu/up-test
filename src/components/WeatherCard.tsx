import { useState, Dispatch, SetStateAction, useEffect } from "react";
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

interface WeatherApiResponse {
  cod: number;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
      main: string;
    }
  ];
}

const initialWeatherState = {
  cod: 0,
  main: {
    feels_like: 34.1254,
    humidity: 70,
    temp: 31.34,
  },
  sys: {
    sunrise: 2100,
    sunset: 700,
  },
  weather: [
    {
      description: "few clouds 11-25%",
      main: "clouds",
    },
  ],
};

interface cityProps {
  name: string;
  coordinates: number[];
}

interface citySelectorProps {
  city: cityProps;
}

const APIKey = "249efd60e5021ba25f979f2caac2b853";

function WeatherCard({ city }: citySelectorProps) {
  const [weather, setWeather] = useState(initialWeatherState);

  // useEffect(() => {
  //   console.log("city changed in card");
  //   console.log(city);
  //   // if (city.name === "a") {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${city.coordinates[1]}&lon=${city.coordinates[0]}&appid=${APIKey}`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setWeather(response);
  //     });
  //   // }
  // }, [city]);

  return (
    <>
      <div className="flex flex-col gap-2 p-4 rounded-md border-2 border-sky-400">
        <div id="weather-current" className="flex items-center gap-4">
          <div className="flex items-center w-10 h-10 rounded-full border-2">
            <Cloudy className="mx-auto align-middle" />
          </div>
          <div id="weather-type">
            <p>WEATHER</p>
            <p>{weather.weather[0].main}</p>
          </div>
          <div id="weather-desc">
            <p>DESCRIPTION</p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>

        <Separator />

        <div id="weather-sun-city" className="flex gap-4">
          <div id="sunset-time">
            <p>SUNSET</p>
            <p>{weather.sys.sunset}</p>
          </div>
          <div id="sunrise-time">
            <p>SUNRISE</p>
            <p>{weather.sys.sunrise}</p>
          </div>
          <div id="location-card">
            <p>LOCATION</p>
            <div className="flex">
              <MapPin />
              <p>{city.name}</p>
            </div>
          </div>
        </div>

        <div id="weather-temperature" className="flex gap-4">
          <div id="temp-real">
            <p>TEMPERATURE</p>
            <p>{Math.round(((weather.main.temp - 273.15) * 100) / 100)}</p>
          </div>
          <div id="temp-feel">
            <p>FEELS LIKE</p>
            <p>
              {Math.round(((weather.main.feels_like - 273.15) * 100) / 100)}
            </p>
          </div>
        </div>

        <div id="weather-humidity" className="flex flex-col gap-1 items-end">
          <p>{weather.main.humidity}% humidity</p>
          <Progress value={weather.main.humidity} />
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
