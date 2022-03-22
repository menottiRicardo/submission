import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = ({ lat, lon, name }) => {
  const [weather, setWeather] = useState({});
  
  useEffect(async () => {
    const api_key = process.env.REACT_APP_API_KEY;
    const { data, ...rest } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    );
    const newWeather = {
      temperature: data.main.temp,
      speed: data.wind.speed,
      icon: data.weather[0].icon,
    };
    setWeather(newWeather);
    console.log(data, newWeather);
  }, []);

  return (
    <>
      <h1>Weather in {name}</h1>
      <p>temperature {weather.temperature} Celcius</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="icon"
      />
      <p>wind {weather.speed} m/s</p>
    </>
  );
};

export default Weather;
