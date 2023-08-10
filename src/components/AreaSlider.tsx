import { Slider } from "./ui/slider";
import { useState } from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
// @ts-ignore
import iconUrl from "../svg/map_pin_blue.svg";
import Recenter from "./map/Recenter";
import Rezoom from "./map/Rezoom";

const mapPin = new Leaflet.Icon({
  iconUrl,
  iconSize: [35, 35],
});

interface LocationObject {
  latitude: number;
  longitude: number;
}

interface LocationInputProp {
  location: LocationObject;
}

function AreaSlider({ location }: LocationInputProp) {
  const [area, setArea] = useState(1);

  const handleArea = (value: number[]) => {
    setArea(value[0]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div id="area" className="flex flex-col gap-2">
        <div id="area-title" className="flex justify-between items-end">
          <h4 className="text-xl font-bold">Area</h4>
          <p className="text-xs text-gray-500">{area} km ⌀ (max 20)</p>
        </div>
        <div id="area-input" className="w-full h-8 flex items-center">
          <div
            id="dot-start"
            className="h-2 w-2 bg-sky-400 rounded-full translate-x-[2px]"
          ></div>
          <div
            id="dot-end"
            className="h-2 w-2 order-last bg-sky-200 rounded-full -translate-x-[2px]"
          ></div>
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
            zoomSnap={0.05}
            zoom={14.5}
            scrollWheelZoom={false}
            attributionControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={mapPin}
            ></Marker>
            <Circle
              center={[location.latitude, location.longitude]}
              pathOptions={{ color: "#38bdf8", weight: 2 }}
              radius={(area * 1000) / 2}
            />
            <Rezoom
              area={area}
              lat={location.latitude}
              lon={location.longitude}
            />
            <Recenter lat={location.latitude} lon={location.longitude} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default AreaSlider;
