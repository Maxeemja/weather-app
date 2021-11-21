import { useQuery } from "react-query";
import Footer from '../footer/footer';
import SubHeader from '../subheader/subHeader';
import ForecastRow from '../forecastRow/forecastRow';

import './secondaryBlock.scss';
import HighlightsBlock from '../highlightsBlock/highligtsBlock';
import Spinner from "../spinner/Spinner";

const SecondaryBlock = ({cityId, tempMeasure, setTempMeasure, convertToFahrengeit}) => {

    const { isLoading, data, isIdle, isError, isSuccess, isFetching } = useQuery(["forecast", cityId],  () =>
    fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/${cityId}/`).then((res) => res.json()).then(res => _transformData(res)), {enabled: cityId !== undefined});  
    const _transformData = (data) => {
        return {
            weather: data.consolidated_weather.slice(1),
            highlights: {
                wind: {
                    speed: Math.round(data.consolidated_weather[0].wind_speed),
                    direction: data.consolidated_weather[0].wind_direction_compass	
                },
                humidity: data.consolidated_weather[0].humidity,
                visibility: data.consolidated_weather[0].visibility.toFixed(1),
                pressure: Math.round(data.consolidated_weather[0].air_pressure)
            }
        }
    }
    
    if(isLoading || isIdle || isFetching) return <Spinner/>
    if(isSuccess) console.log(data)
    return(
        <div className="secondary__block">
            <SubHeader tempMeasure={tempMeasure} setTempMeasure={setTempMeasure}/>
            <ForecastRow cityId={cityId} weather={data.weather} tempMeasure={tempMeasure} convertToFahrengeit={convertToFahrengeit}/>
            <HighlightsBlock cityId={cityId} highlights={data.highlights}/>
            <Footer/>
        </div>
        
    )
}
export default SecondaryBlock;