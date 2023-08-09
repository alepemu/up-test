import { useState, useEffect } from "react";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { MapPin } from "lucide-react";

interface WeatherApiResponse {
  cod: number;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
  };
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
      icon: number;
      main: string;
    }
  ];
}

const initialWeatherState = {
  cod: 0,
  main: {
    feels_like: 0,
    humidity: 0,
    temp: 0,
  },
  name: "",
  sys: {
    sunrise: 0,
    sunset: 0,
  },
  weather: [
    {
      description: "-",
      icon: 0,
      main: "-",
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
  const [sunrise, setSunrise] = useState("0");
  const [sunset, setSunset] = useState("0");

  useEffect(() => {
    if (city.name !== "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.coordinates[0]}&lon=${city.coordinates[1]}&appid=${APIKey}&units=metric`
      )
        .then((response) => response.json())
        .then((response) => {
          setWeather(response);
        });
    } else {
      setWeather(initialWeatherState);
    }
  }, [city]);

  useEffect(() => {
    if (weather.name !== "") {
      const sunriseDate = new Date(weather.sys.sunrise * 1000);
      const sunsetDate = new Date(weather.sys.sunset * 1000);
      const sunriseH = `${sunriseDate.getHours()}`;
      const sunsetH = `${sunsetDate.getHours()}`;
      const sunriseM = `${sunriseDate.getMinutes()}`;
      const sunsetM = `${sunsetDate.getMinutes()}`;
      const sunrise = `${sunriseH.length === 1 ? "0" + sunriseH : sunriseH}:${
        sunriseM.length === 1 ? "0" + sunriseM : sunriseM
      }`;
      const sunset = `${sunsetH.length === 1 ? "0" + sunsetH : sunsetH}:${
        sunsetM.length === 1 ? "0" + sunsetM : sunsetM
      }`;
      setSunrise(sunrise);
      setSunset(sunset);
    } else {
      setSunrise("0");
      setSunset("0");
    }
  }, [weather]);

  return (
    <>
      <div className="flex flex-col gap-2 p-4 rounded-md border-2 border-sky-400">
        <div id="weather-current" className="flex items-center gap-4">
          <div className="flex items-center w-10 h-10 rounded-full border-2">
            <img
              src={
                weather.name === ""
                  ? "https://cdn.iconscout.com/icon/free/png-256/free-search-1895571-1604561.png"
                  : `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
              }
            ></img>
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
            <p>{sunset}</p>
          </div>
          <div id="sunrise-time">
            <p>SUNRISE</p>
            <p>{sunrise}</p>
          </div>
          <div id="location-card">
            <p>LOCATION</p>
            <div className="flex">
              <MapPin />
              <p>{city.name || "-"}</p>
            </div>
          </div>
        </div>

        <div id="weather-temperature" className="flex gap-4">
          <div id="temp-real">
            <p>TEMPERATURE</p>
            <p>{Math.round(weather.main.temp * 100) / 100}</p>
          </div>
          <div id="temp-feel">
            <p>FEELS LIKE</p>
            <p>{Math.round(weather.main.feels_like * 100) / 100}</p>
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
