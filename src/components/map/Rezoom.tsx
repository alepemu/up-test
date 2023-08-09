import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface ZoomProps {
  area: number;
  lat: number;
}

const Rezoom = ({ area, lat }: ZoomProps) => {
  const map = useMap();
  useEffect(() => {
    if (lat !== 0) {
      const mPerPx = area * 5;
      const zoom = Math.log2(
        (156543.03392 * Math.cos((lat * Math.PI) / 180)) / mPerPx
      );
      map.setZoom(zoom);
    }
  }, [area]);
  return null;
};

export default Rezoom;
