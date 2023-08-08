import { Slider } from "./ui/slider"
import { useEffect, useState } from "react";

function AreaSlider() {
  const [area, setArea] = useState(1)

  const handleArea = (value: number[]) => {
    setArea(value[0]);
  };

  useEffect(() => {
    console.log('area', area);
  }, [area])

  return (
    <div className="flex flex-col gap-4">

      <div id="area" className="flex flex-col gap-2">
        <div id="area-title" className="flex justify-between items-end">
          <h4 className="text-xl font-bold">Area</h4>
          <p className="text-xs text-gray-500">max 20 km</p>
        </div>
        <div id="area-input" className="w-full h-8 flex">
          <Slider value={[area]} onValueChange={handleArea} min={1} max={20} step={1} />
        </div>
      </div>

      <div id="map">
        <div className="w-full h-48 bg-blue-100 rounded-lg"></div>
      </div>

    </div >
  );
}

export default AreaSlider;
