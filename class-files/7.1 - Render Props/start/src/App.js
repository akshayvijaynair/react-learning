import React, {useState, createRef} from "react";

const App = () => {
  const locationInput = createRef();
  const [location, setLocation] = useState("Bengaluru");
  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Type a location..."
        ref={locationInput}
        onKeyUp={e => {
          if (e.keyCode === 13) {
            setLocation(e.target.value);
            locationInput.current.value = "";
          }
        }}
      />
      <div className="result">
        <div className="place">Bengaluru, India</div>
        <div className="temperature">27&deg;C</div>
        <div className="conditions">Partly Cloudy</div>
        <img
          src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
          alt="Partly Cloudy"
          className="icon"
        />
      </div>
    </div>
  );
};

export default App;
