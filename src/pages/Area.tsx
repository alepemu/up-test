import LocationInput from "../components/LocationInput";
import AreaSlider from "../components/AreaSlider";
import { useState, useEffect } from "react";

// const initialLocation = { latitude: 51.5, longitude: 0 };
const initialLocation = { latitude: 41.4100067, longitude: 2.2138386 };

function Area() {
  const [location, setLocation] = useState(initialLocation);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
    // console.log("loc", location);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Area selector</h2>
      <LocationInput location={location} setLocation={setLocation} />
      <AreaSlider location={location} setLocation={setLocation} />
    </div>
  );
}

export default Area;
