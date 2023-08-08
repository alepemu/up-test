import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect, useState, Dispatch, SetStateAction } from "react";


interface LocationObject {
  lat: number, lon: number
}

interface LocationInputProps {
  location: LocationObject,
  setLocation: Dispatch<SetStateAction<LocationObject>>;
}

function LocationInput({ location, setLocation }: LocationInputProps) {
  // const [location, setLocation] = useState({ lat: 0, lon: 0 })
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    setLatitude(location.lat)
    setLongitude(location.lon)
  }, [location])

  const handleLatitude = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatitude(+event.target.value)
  }

  const handleLongitude = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongitude(+event.target.value)
  }

  // const handleLocation = (event: Event, value: number) => {
  //   setLocation({ lat: value, lon: 0 })
  //   console.log(value);
  // }

  // useEffect(() => {
  //   console.log('lat', latitude);
  // }, [latitude])

  // useEffect(() => {
  //   console.log('lon', longitude);
  // }, [longitude])

  return (
    <div id="location" className="flex flex-col gap-2">
      <h4 className="text-xl font-bold">Location</h4>
      <div id="location-input" className="flex">
        <div className="w-1/2">
          <Label htmlFor="latitude">LATITUDE</Label>
          <Input type="number" id="latitude" value={latitude} onChange={(event) => handleLatitude(event)} />
        </div>
        <div className="w-1/2">
          <Label htmlFor="longitude">LONGITUDE</Label>
          <Input type="number" id="longitude" value={longitude} onChange={(event) => handleLongitude(event)} />
        </div>
      </div>
    </div>
  );
}

export default LocationInput;
