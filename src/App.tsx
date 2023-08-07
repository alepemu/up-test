import Weather from "./pages/Weather";
import Area from "./pages/Area";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <h1 className="bg-red-500">
        THIS IS APP
      </h1>
      <Area />
      <Weather />
      <Navbar />
    </div>
  );
}

export default App;
