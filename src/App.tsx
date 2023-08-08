import Area from "./pages/Area";
import Weather from "./pages/Weather";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [areaTab, setAreaTab] = useState(true)

  return (
    <div className="bg-slate-300">
      <div className="relative bg-white mx-auto h-screen w-[500px] p-6">
        {areaTab ? <Area /> : <Weather />}
        <Navbar setAreaTab={setAreaTab} />
      </div>
    </div>
  );
}

export default App;
