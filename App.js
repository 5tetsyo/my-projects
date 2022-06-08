import './App.css';
import { useState, useEffect } from 'react';
import { City } from './components/contextAndHooks/context';
import { changeWeather} from './components/getWeather/WeatherFetchAndMarkUp/weatherFetch';
import WeatherPage from './components/getWeather/WeatherPage';

function App() {
  const [weather, setWeather] = useState(null);
  const [cityWeather, setCityWeather] = useState(null)
  useEffect(() => {
    changeWeather(setWeather, cityWeather);
  }, [cityWeather])
  return (
    <City.Provider value={{
      cityWeather,
      setCityWeather
    }}>
      <WeatherPage weather={weather}>
      </WeatherPage>  
    </City.Provider>
  );
}

export default App;
