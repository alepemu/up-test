import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface RecenterProps {
  lat: number;
  lng: number;
}

const RecenterAutomatically = ({ lat, lng }: RecenterProps) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
};

export default RecenterAutomatically;
