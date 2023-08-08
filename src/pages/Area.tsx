import LocationInput from "../components/LocationInput";
import AreaSlider from "../components/AreaSlider";

function Area() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Area selector</h2>
      <LocationInput />
      <AreaSlider />
    </div >
  );
}

export default Area;
