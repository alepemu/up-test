import { Label } from "./ui/label";
import { InputL, InputR } from "./ui/input";
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
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    parameter: string
  ) => {
    setLocation({ ...location, [parameter]: +event.target.value });
  };

  return (
    <div id="location" className="flex flex-col gap-2">
      <h4 className="text-xl font-bold">Location</h4>
      <div id="location-input" className="flex">
        <div className="w-1/2">
          <Label htmlFor="latitude" className="text-xs">
            LATITUDE
          </Label>
          <InputL
            id="latitude"
            type="number"
            min={-90}
            max={90}
            value={location.latitude}
            onChange={(event) => handleChange(event, "latitude")}
          />
        </div>
        <div className="w-1/2">
          <Label htmlFor="longitude" className="text-xs">
            LONGITUDE
          </Label>
          <InputR
            id="longitude"
            type="number"
            min={-180}
            max={180}
            value={location.longitude}
            onChange={(event) => handleChange(event, "longitude")}
          />
        </div>
      </div>
    </div>
  );
}

export default LocationInput;
