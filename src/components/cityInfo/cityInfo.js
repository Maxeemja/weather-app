import { useQuery } from 'react-query';
import Spinner from '../spinner/Spinner';
import useGetDate from '../../hooks/useGetDate';

import './cityInfo.scss';
import loc from '../../assets/location.png';
import location from '../../assets/loc.png';


const CityInfo = ({toggleTabs, cityId, tempMeasure}) => {

    const { isLoading, data: city, isFetching, isPreviousData, isError, isStale } = useQuery(["city", cityId],  () =>
    fetch(`location/${cityId}/`).then((res) => res.json()).then(res => _transformData(res)));
    
    const {getMonth, getWeekDay, day} = useGetDate();

    const _transformData = (city) => {
        return {
            img: city.consolidated_weather[0].weather_state_abbr,
            temp: Math.floor(city.consolidated_weather[0].the_temp),
            state: city.consolidated_weather[0].weather_state_name,
            title: city.title
        }
    }
    if((isLoading || isFetching)) return <Spinner/>
    
    if(isError) return <div>Ooops! Something happened...</div>
    return (
        <div className="city__info">
            <div className="city__info_search">
                <div className="city__info_search-btn" onClick={() => toggleTabs('search')}>Search for places</div>
                <div className="city__info_search-currLoc">
                    <img src={loc} alt="" />
                </div>
            </div>
            <div className="city__info_imgs">
                <div className="background"></div>
                <img src={`https://www.metaweather.com/static/img/weather/${city.img}.svg`} alt="" />
            </div>
            <div className="city__info_weather">
                <div className="city__info_weather-temp">
                    {city.temp}
                    <span className="measure">{tempMeasure === 'celsius' ? '°C' : '°F'}</span>
                </div>
                <div className="city__info_weather-state">{city.state}</div>
            </div>
            <div className="city__info_date">Today <span>•</span> {`${getWeekDay()}, ${day} ${getMonth()}`}</div>
            <div className="city__info_location"><img src={location} alt="" /> {city.title}</div>
        </div>
    )
}
export default CityInfo;
