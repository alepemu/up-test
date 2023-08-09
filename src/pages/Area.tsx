import LocationInput from "../components/LocationInput";
import AreaSlider from "../components/AreaSlider";
import { useState, useEffect } from "react";

const initialLocation = { latitude: 51.5072, longitude: 0.1276 };

function Area() {
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    if (location === initialLocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Area selector</h2>
      <LocationInput location={location} setLocation={setLocation} />
      <AreaSlider location={location} />
    </div>
  );
}

export default Area;
