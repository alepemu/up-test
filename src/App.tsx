import Area from "./pages/Area";
import Weather from "./pages/Weather";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [areaTab, setAreaTab] = useState(true);

  return (
    <div className="h-screen bg-slate-900">
      <div className="relative bg-white mx-auto h-full w-screen min-[500px]:w-[500px] p-6">
        {areaTab ? <Area /> : <Weather />}
        <Navbar areaTab={areaTab} setAreaTab={setAreaTab} />
      </div>
    </div>
  );
}

export default App;
