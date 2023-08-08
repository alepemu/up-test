
function WeatherCard() {


  return (
    <>
      <div>
        <div id="weather-current">
          <div id="weather-type">
            <p>WEATHER</p>
            <p>clouds</p>
          </div>
          <div id="weather-desc">
            <p>DESCRIPTION</p>
            <p>few clouds 11-25%</p>
          </div>
        </div>

        <div id="weather-sun-city">
          <div id="sunset-time">
            <p>SUNSET</p>
            <p>21:00</p>
          </div>
          <div id="sunrise-time">
            <p>SUNRISE</p>
            <p>07:00</p>
          </div>
          <div id="location-card">
            <p>LOCATION</p>
            <p>Barcelona</p>
          </div>
        </div>

        <div id="weather-temperature">
          <div id="temp-real">
            <p>TEMPERATURE</p>
            <p>31,34</p>
          </div>
          <div id="temp-feel">
            <p>FEELS LIKE</p>
            <p>34,1254</p>
          </div>
        </div>

        <div id="weather-humidity">
          <p>70% humidity</p>
        </div>
      </div >

    </>
  );
}

export default WeatherCard;