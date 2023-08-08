import CitySelector from "../components/CitySelector";
import WeatherCard from "../components/WeatherCard";

function Weather() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Weather City</h2>
      <CitySelector />
      <WeatherCard />
    </div >
  );
}

export default Weather;
