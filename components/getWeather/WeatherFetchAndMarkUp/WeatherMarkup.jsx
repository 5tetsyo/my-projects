import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import classes from './WeatherMarkup.module.css'

const WeatherMarkup = ({obj}) => {
    const {location, current} = obj;
    const timezone = location.tz_id;
    const [localDate, setLocalDate] = useState(DateTime.now().setZone(timezone).setLocale('en').toFormat('dd MMMM yyyy hh:mm'))
    useEffect(() => {
        const interval = setInterval(() => {
            setLocalDate(DateTime.now().setZone(timezone).setLocale('en').toFormat('dd MMMM yyyy hh:mm'))
        }, 3000);
        return () => {
            clearTimeout(interval);
          };
    }, [timezone]);
    const infoArray = [<div style={{fontSize: '4em'}}>{Math.floor(current.temp_c)}°</div>,
                        <div>Feels like<p style={{fontSize: '2em', margin: '0'}}>{Math.floor(current.feelslike_c)}°</p></div>,
                        <div>{location.name}, {location.country}, {localDate}</div>,
                        <div><div> <img src={current.condition.icon} alt="Weather logo" /></div>{current.condition.text}</div>
                        ]
    return (
        <div className={classes.weatherBlock}>
            {infoArray.map((item, index) => <div key={index} className={classes.infoBlock}>{item}</div>)} 
            
        </div>
    );
}

export default WeatherMarkup;
