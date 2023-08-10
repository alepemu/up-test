import { useState, useEffect } from "react";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { MapPin } from "lucide-react";
import { ExternalLink } from "lucide-react";

// interface WeatherApiResponse {
//   cod: number;
//   main: {
//     feels_like: number;
//     humidity: number;
//     temp: number;
//   };
//   name: string;
//   sys: {
//     sunrise: number;
//     sunset: number;
//   };
//   weather: [
//     {
//       description: string;
//       icon: number;
//       main: string;
//     }
//   ];
// }

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

const APIKey = process.env.REACT_APP_API_KEY;

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
      <div className="flex flex-col gap-4 p-4 rounded-lg border-2 border-sky-400 text-lg">
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
            <p className="text-xs">WEATHER</p>
            <p>{weather.weather[0].main}</p>
          </div>
          <div id="weather-desc">
            <p className="text-xs">DESCRIPTION</p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>

        <Separator />

        <div id="weather-sun-city" className="flex gap-4">
          <div id="sunset-time" className="w-3/12">
            <p className="text-xs">SUNSET</p>
            <p>{sunset}</p>
          </div>
          <div id="sunrise-time" className="w-3/12">
            <p className="text-xs">SUNRISE</p>
            <p>{sunrise}</p>
          </div>
          <div id="location-card" className="w-6/12">
            <p className="text-xs">LOCATION</p>
            <div className="flex items-center gap-1">
              <MapPin size={20} className="opacity-80" />
              {city.name !== "" ? (
                <>
                  <a
                    className="flex items-center gap-1"
                    href={`https://www.google.com/maps/search/?api=1&query=${city.coordinates[0]}%2C${city.coordinates[1]}`}
                    target="_blank"
                  >
                    {city.name.charAt(0).toUpperCase() + city.name.slice(1) ||
                      "-"}
                    <ExternalLink size={16} color="darkblue" />
                  </a>
                </>
              ) : (
                <p>-</p>
              )}
            </div>
          </div>
        </div>

        <div id="weather-temperature" className="flex gap-4">
          <div id="temp-real" className="w-2/6">
            <p className="text-xs">TEMPERATURE</p>
            <p>
              {String(Math.round(weather.main.temp * 100) / 100).replace(
                ".",
                ","
              )}
            </p>
          </div>
          <div id="temp-feel" className="w-2/6">
            <p className="text-xs">FEELS LIKE</p>
            <p>
              {String(Math.round(weather.main.feels_like * 100) / 100).replace(
                ".",
                ","
              )}
            </p>
          </div>
        </div>

        <div id="weather-humidity" className="flex flex-col gap-1 items-end">
          <p className="text-xs">{weather.main.humidity}% humidity</p>
          <Progress value={weather.main.humidity} />
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
