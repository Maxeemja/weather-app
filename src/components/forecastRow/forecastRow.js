
import Spinner from "../spinner/Spinner";
import useGetDate from '../../hooks/useGetDate';
import './forecastRow.scss';

const ForecastRow = ({cityId, weather, tempMeasure, convertToFahrengeit}) => {

    

    const {getMonth, getWeekDay, day} = useGetDate();
    
    

    return (
        <div className="forecast">
            {weather.map((el, i) => {
                let weekday = new Date(el.applicable_date).getDay();
                return <li className="forecast-item" key={i}>
                            <div className="forecast-item_day">{ i=== 0 ? 'Tomorrow' : `${getWeekDay(weekday)}  ${day + i + 1} ${getMonth()}`}</div>
                            <div className="forecast-item_img">
                                <img src={`https://www.metaweather.com/static/img/weather/${el.weather_state_abbr}.svg`} alt="" />
                            </div>
                            <div className="forecast-item_temps">
                                {tempMeasure === 'celsius' ? Math.floor(el.max_temp) + '°C' : convertToFahrengeit(Math.floor(el.max_temp))}
                                <span>{tempMeasure === 'celsius' ? Math.floor(el.min_temp) + '°C' : convertToFahrengeit(Math.floor(el.min_temp))}</span>
                            </div>
                        </li>})
            }
        </div>
    )
    
   
}
export default ForecastRow;