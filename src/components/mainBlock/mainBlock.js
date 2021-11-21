import { useState } from "react";
import { useQuery } from "react-query";
import SearchMenu from "../searchMenu/searchMenu";
import CityInfo from "../cityInfo/cityInfo";
import Spinner from "../spinner/Spinner"
import './mainBlock.scss';
const MainBlock = ({city, setCity, tempMeasure, convertToFahrengeit, setAllLoaded}) => {

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
        <>
            <div className="main__block main__block-sizing">
                <CityInfo setCity={setCity} toggleTabs={toggleTabs} cityId={city} tempMeasure={tempMeasure} convertToFahrengeit={convertToFahrengeit}/>
                <SearchMenu toggleTabs={toggleTabs} setCity={setCity}/>
            </div>
            <div className="main__block-sizing md-none"></div>
        </>
        
        
    )
}
export default MainBlock;