import { useState } from "react";
import { useQuery } from "react-query";
import SearchMenu from "../searchMenu/searchMenu";
import CityInfo from "../cityInfo/cityInfo";
import Spinner from "../spinner/Spinner"
import './mainBlock.scss';
const MainBlock = ({city, setCity, tempMeasure}) => {

    const toggleTabs = (tab) => {
        const menu = document.querySelector('.city__search');
        const infoBlock = document.querySelector('.city__info')
        if (tab === 'info') {
            menu.style.display = "none"
            infoBlock.style.display = "block"
        } else {
            menu.style.display = "block"
            infoBlock.style.display = "none"
        }
    }

    return (
        <div className="main__block">
            <CityInfo toggleTabs={toggleTabs} cityId={city} tempMeasure={tempMeasure}/>
            <SearchMenu toggleTabs={toggleTabs} setCity={setCity}/>
        </div>
    )
}
export default MainBlock;