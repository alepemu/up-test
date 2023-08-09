import CitySelector from "../components/CitySelector";
import WeatherCard from "../components/WeatherCard";
import { useEffect, useState } from "react";

function Weather() {
  const [city, setCity] = useState({ name: "", coordinates: [0, 0] });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Weather City</h2>
      <CitySelector city={city} setCity={setCity} />
      <WeatherCard city={city} />
    </div>
  );
}

export default Weather;
