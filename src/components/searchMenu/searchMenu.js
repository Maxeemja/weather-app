import { useQuery } from "react-query";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import './searchMenu.scss';

const SearchMenu = ({setCity, toggleTabs}) => {
    const [searchWord, setSearchWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchWord(e.target.cityName.value);
        e.target.reset();
        toggleIco();
    }

    const { isLoading, data, isFetching, isSuccess, isError } = useQuery(["cities", searchWord],  () =>
    fetch(`https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${searchWord}`).then((res) => res.json()), {enabled: searchWord.length > 0});
    
    const toggleIco = () => {
        let inputValue = document.querySelector('.search-form > input').value;    
        const ico = document.querySelector('form > i');
        inputValue !== '' ? ico.style.display = "none" : ico.style.display = "block"  
    }
    return (
        <div className="city__search">
            <div className="close" onClick={() => {toggleTabs('info'); setSearchWord('')}}>&times;</div>
            <form className="search-form" action="submit" onSubmit={handleSubmit} >
                <i className="fas fa-search"></i>;
                <input onChange={toggleIco} placeholder="search" type="text" name="cityName"/>
                <button type="submit" disabled={isLoading}>Search</button>
            </form>
            {isLoading  ? <Spinner/> : null} 
            {isSuccess && data.length > 0 ? 
                <div className="city__search_results">
                    {data.slice(0, 3).map(el => 
                    <li 
                        className="city__search_results-item" 
                        key={el.woeid} 
                        id={el.woeid}
                        onClick={(e) => {setCity(e.target.id); toggleTabs('info'); setSearchWord('')}}
                        >{el.title}<i className="fas fa-chevron-right"></i>
                    </li>)}    
                </div>: null}
            {isSuccess && data.length < 1 ? <div className="no-results">No city found</div> : null}
            
            {isError ? <div>Something is wrong</div> : null}
            
        </div>
    )
}
export default SearchMenu;