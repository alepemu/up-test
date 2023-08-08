import { Slider } from "./ui/slider";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
// @ts-ignore
import iconUrl from "../svg/map_pin.svg";

const newicon = new Leaflet.Icon({
  iconUrl,
  iconSize: [25, 55],
});

interface LocationObject {
  latitude: number;
  longitude: number;
}

interface LocationInputProps {
  location: LocationObject;
  setLocation: Dispatch<SetStateAction<LocationObject>>;
}

function AreaSlider({ location, setLocation }: LocationInputProps) {
  const [area, setArea] = useState(1);

  const handleArea = (value: number[]) => {
    setArea(value[0]);
  };

  useEffect(() => {
    console.log("actualizado", location);
  }, [location]);

  return (
    <div className="flex flex-col gap-4">
      <div id="area" className="flex flex-col gap-2">
        <div id="area-title" className="flex justify-between items-end">
          <h4 className="text-xl font-bold">Area</h4>
          <p className="text-xs text-gray-500">max 20 km</p>
        </div>
        <div id="area-input" className="w-full h-8 flex">
          <Slider
            value={[area]}
            onValueChange={handleArea}
            min={1}
            max={20}
            step={1}
          />
        </div>
      </div>

      <div id="map">
        <div className="w-full h-56 rounded-lg overflow-hidden">
          <MapContainer
            className="w-full h-full"
            center={[location.latitude, location.longitude]}
            zoom={14}
            scrollWheelZoom={false}
            attributionControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={newicon}
            ></Marker>
            <Circle
              center={[location.latitude, location.longitude]}
              pathOptions={{ fillColor: "black" }}
              radius={(area * 1000) / 2}
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default AreaSlider;
