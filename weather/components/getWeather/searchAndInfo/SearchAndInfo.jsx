import React, { useContext, useState } from 'react';
import classes from './SearchAndInfo.module.css'
import { cityArray } from '../../contextAndHooks/citysArray';
import { useFilter } from '../../contextAndHooks/useFilter';
import { City } from '../../contextAndHooks/context';
const SearchAndInfo = ({current}) => {
    const {cityWeather, setCityWeather} = useContext(City)
    const [searchCity, setSearchCity] = useState('');
    const filtered = useFilter(cityArray, searchCity)
    const searchAndInfoBlock = [
    <div>Cloud: <span>{current.cloud}%</span></div>,
    <div>Visibility: <span>{current.vis_km} км</span></div>,
    <div>Humidity: <span>{current.humidity}%</span></div>
    ]


    return (
        <div className={classes.searcBlock}>
            <div className={classes.searchItem}>
                <input className={classes.cityInput} type="text" onChange={(e) => {
                    setSearchCity(e.target.value);
                    }}/>
                {filtered.map((item, index) => <p key={index} onClick={()=> {setCityWeather(item)}}>{item}</p>)}
            </div>
            <div className={classes.infoItem}>
                <hr />
                <p>Weather details</p>
                {searchAndInfoBlock.map((item,index) => <div className={classes.informationItem} key={index}>{item}</div>)}
                {current.wind > 0
                    ? <div className={classes.informationItem}>No wind now.</div>
                    : <div className={classes.informationItem}>Wind speed: <span>{Math.round(current.wind_kph * 0.28)} м/с</span></div>}
            </div>
        </div>
    );
}

export default SearchAndInfo;
