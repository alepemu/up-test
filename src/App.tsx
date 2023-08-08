import AreaSelector from "./pages/AreaSelector";
import WeatherCity from "./pages/WeatherCity";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="bg-slate-300">
      <div className="relative bg-white mx-auto h-screen w-[500px] p-6">
        <AreaSelector />
        {/* <WeatherCity /> */}
        {/* <Navbar /> */}
      </div>
    </div>
  );
}

export default App;
