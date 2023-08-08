import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface ZoomProp {
  zoom: number;
}

const Rezoom = ({ zoom }: ZoomProp) => {
  const map = useMap();
  useEffect(() => {
    console.log("zoom", zoom);
    map.setZoom(zoom);
  }, [zoom]);
  return null;
};

export default Rezoom;
