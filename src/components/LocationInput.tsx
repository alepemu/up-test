import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Dispatch, SetStateAction } from "react";

interface LocationObject {
  latitude: number;
  longitude: number;
}

interface LocationInputProps {
  location: LocationObject;
  setLocation: Dispatch<SetStateAction<LocationObject>>;
}

function LocationInput({ location, setLocation }: LocationInputProps) {
  const handleLatitude = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({ ...location, latitude: +event.target.value });
  };

  const handleLongitude = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({ ...location, longitude: +event.target.value });
  };

  return (
    <div id="location" className="flex flex-col gap-2">
      <h4 className="text-xl font-bold">Location</h4>
      <div id="location-input" className="flex">
        <div className="w-1/2">
          <Label htmlFor="latitude">LATITUDE</Label>
          <Input
            id="latitude"
            type="number"
            min={-90}
            max={90}
            value={location.latitude}
            onChange={(event) => handleLatitude(event)}
          />
        </div>
        <div className="w-1/2">
          <Label htmlFor="longitude">LONGITUDE</Label>
          <Input
            id="longitude"
            type="number"
            min={-180}
            max={180}
            value={location.longitude}
            onChange={(event) => handleLongitude(event)}
          />
        </div>
      </div>
    </div>
  );
}

export default LocationInput;
