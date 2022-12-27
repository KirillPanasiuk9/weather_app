import React from 'react';
import './App.css';
import CityForm from "./Components/CityForm/CityForm";
import CurrentWeather from "./Components/Container/CurrentWeather/CurrentWeather";
import Location from "./Components/Container/Location/Location";
import Date from "./Components/Container/Date/Date";
import WeekForecast from "./Components/Container/WeekWeather/WeekForecast";



const App: React.FC = () => {

    return (
    <div className="App">
        <CityForm/>
        <div className="container">
            <Location/>
            <Date/>
            <CurrentWeather/>
            <WeekForecast/>
        </div>
    </div>
  )
}

export default App