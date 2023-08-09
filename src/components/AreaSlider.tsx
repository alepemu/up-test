import { Slider } from "./ui/slider";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import Leaflet from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  useMap,
  CircleMarker,
} from "react-leaflet";
// @ts-ignore
import iconUrl from "../svg/map_pin.svg";
import RecenterAutomatically from "./Recenter";
import Rezoom from "./Rezoom";

const mapPin = new Leaflet.Icon({
  iconUrl,
  iconSize: [30, 30],
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

  // useEffect(() => {
  //   const zoom = map.getZoom();
  //   const lat = map.getCenter().lat;
  //   const metersPerPixel =
  //     (156543.03392 * Math.cos((lat * Math.PI) / 180)) / Math.pow(2, zoom);
  // }, [area]);

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
            {/* <CircleMarker
              center={[location.latitude, location.longitude]}
              pathOptions={{ color: "black", weight: 1 }}
              radius={50}
            /> */}
            <RecenterAutomatically
              lat={location.latitude}
              lng={location.longitude}
            />
            <Rezoom area={area} lat={location.latitude} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default AreaSlider;
