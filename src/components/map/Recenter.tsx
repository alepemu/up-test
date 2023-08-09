import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface RecenterProps {
  lat: number;
  lon: number;
}

const RecenterAutomatically = ({ lat, lon }: RecenterProps) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lon]);
  }, [lat, lon]);
  return null;
};

export default RecenterAutomatically;
