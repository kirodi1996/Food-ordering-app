import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './shimmer';
import { SWIGGY_API_URL } from '../constants/api-url';

export const Body = () => {
    const [listOfRest, setListOfRest] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json()
        setFilterData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    

    return (
        // conditional rendering
        !filterData?.length ? <Shimmer /> :
        <div className='body'>
            <div className='flex'>
                <input type='text' onChange={(e)=> {setSearchText(e.target.value)}} value={searchText} className='' placeholder='search'/>
                <button onClick={() => {
                    setFilterData(listOfRest.filter((res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())))
                }}>Search</button>
                <button 
                    className='p-4' 
                    onClick={() => {
                        const data = filterData.filter(data => data?.info?.avgRating > 4.2)
                        setFilterData(data);
                }}>Top rated restaurant</button>
            </div>

            <div className='res-container flex'>
                {
                    filterData?.map((data)=> (
                        <RestaurantCard key={data?.info?.id}
                        resData={data}
                    />
                    ))
                }
            </div>
        </div>
    )
}