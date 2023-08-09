import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface ZoomProps {
  area: number;
  lat: number;
  lon: number;
}

const Rezoom = ({ area, lat, lon }: ZoomProps) => {
  const map = useMap();
  useEffect(() => {
    if (lat !== 0) {
      const metersXpixel = area * 5;
      const zoom = Math.log2(
        (156543.03392 * Math.cos((lat * Math.PI) / 180)) / metersXpixel
      );
      map.setView([lat, lon]);
      map.setZoom(zoom);
    }
  }, [area]);
  return null;
};

export default Rezoom;
