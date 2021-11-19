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
        toggleIco()
    }

    const { isLoading, data, isFetching, isSuccess, isError } = useQuery(["cities", searchWord],  () =>
    fetch(`location/search/?query=${searchWord}`).then((res) => res.json()), {enabled: searchWord.length > 0})
    
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
            {isLoading || isFetching ? <Spinner/> : null} 

            <div className="city__search_results">
                {isSuccess ? data.slice(0, 3).map(el => 
                <li 
                    className="city__search_results-item" 
                    key={el.woeid} 
                    id={el.woeid}
                    onClick={(e) => {setCity(e.target.id); toggleTabs('info')}}
                    >{el.title}<i className="fas fa-chevron-right"></i>
                </li>) 
                : isSuccess && data.length < 1 ? <div>No city found...</div> : null}
            </div>
            
            {isError ? <div>Something is wrong</div> : null}
            
        </div>
    )
}
export default SearchMenu;