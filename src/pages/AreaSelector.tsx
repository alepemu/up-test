import Location from "../components/Location";
import Area from "../components/Area";

function AreaSelector() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Area selector</h2>
      <Location />
      <Area />
    </div >
  );
}

export default AreaSelector;
