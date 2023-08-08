import LocationInput from "../components/LocationInput";
import AreaSlider from "../components/AreaSlider";
import { useState, useEffect } from "react";

function Area() {
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({ lat: position.coords.latitude, lon: position.coords.longitude })
    });
    // console.log('loc', location);
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Area selector</h2>
      <LocationInput location={location} setLocation={setLocation} />
      <AreaSlider />
    </div >
  );
}

export default Area;
