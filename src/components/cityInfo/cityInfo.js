import { useQuery } from 'react-query';
import { useState } from 'react';
import Spinner from '../spinner/Spinner';
import useGetDate from '../../hooks/useGetDate';

import './cityInfo.scss';
import loc from '../../assets/location.png';
import location_img from '../../assets/loc.png';


const CityInfo = ({toggleTabs, cityId, tempMeasure, convertToFahrengeit, setCity}) => {
    // Kiev - 924938
    const [location, setLocation] = useState();
    
    navigator.geolocation.getCurrentPosition(
        (data) => setLocation({latt: data.coords.latitude, long: data.coords.longitude}),
        () => setCity(924938) // setting default
    );

    const locationQuery = useQuery(["location", location],  () =>
    fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${location.latt},${location.long}`).then((res) => res.json()).then((res) => setCity(res[0].woeid)), {enabled: location !== undefined});
    
    const { isLoading, data: city, isFetching, isError, isIdle } = useQuery(["city",cityId],  () =>
    fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/${cityId}/`).then((res) => res.json()).then(res =>  _transformData(res)), {enabled: cityId !== undefined});
    
    const {getMonth, getWeekDay, day} = useGetDate();
    const _transformData = (city) => {
        return {
            img: city.consolidated_weather[0].weather_state_abbr,
            temp: Math.floor(city.consolidated_weather[0].the_temp),
            state: city.consolidated_weather[0].weather_state_name,
            title: city.title
        }
    }

    if((isLoading || isFetching || isIdle)) return <Spinner/>
    if(isError) return <div>Ooops! Something happened...</div>

    return (
        <div className="city__info">
            <div className="city__info_search">
                <div className="city__info_search-btn" onClick={() => toggleTabs('search')}>Search for places</div>
                <div style={{'display': location === undefined ? 'none' : 'flex'}} onClick={() => locationQuery.refetch()} className="city__info_search-currLoc">
                    <img src={loc} alt="" />
                </div>
            </div>
            <div className="city__info_imgs">
                <div className="background"></div>
                <img src={`https://www.metaweather.com/static/img/weather/${city.img}.svg`} alt="" />
            </div>
            <div className="city__info_weather">
                <div className="city__info_weather-temp">
                    {tempMeasure === 'celsius' ? city.temp : convertToFahrengeit(city.temp).slice(0, -2)}
                    <span className="measure">{tempMeasure === 'celsius' ? '°C' : '°F'}</span>
                </div>
                <div className="city__info_weather-state">{city.state}</div>
            </div>
            <div className="city__info_date">Today <span>•</span> {`${getWeekDay()}, ${day} ${getMonth()}`}</div>
            <div className="city__info_location"><img src={location_img} alt="" /> {city.title}</div>
        </div>
    )
}
export default CityInfo;
