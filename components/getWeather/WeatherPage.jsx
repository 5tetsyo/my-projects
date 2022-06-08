import React, { useMemo, useState } from 'react';
import WeatherMarkup from './WeatherFetchAndMarkUp/WeatherMarkup';
import SearchAndInfo from './searchAndInfo/SearchAndInfo';

const WeatherPage = ({weather}) => {
    const [styles, setStyles] = useState({
        backgroundColor: 'gray',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'});
    useMemo(()=> {
        return weather === null ? styles : setStyles({...styles, backgroundImage: weather.background})
    }, [weather]);
    return (
        <div>
            {weather === null ? <p>Stay here</p> :
                <div className='WeatherPage' style={styles}>
                    {weather === null
                        ? <div>Stay Here</div>
                        : <div className='App'>
                    <WeatherMarkup obj={weather}/> 
                    <SearchAndInfo current={weather.current}></SearchAndInfo></div>}
                </div>
            }
        </div>
    );
}

export default WeatherPage;
