import { useState } from 'react';
import {RESTAURANT_DATA} from '../constants/restaurant-data';
import RestaurantCard from './RestaurantCard';

export const Body = () => {
    const [filterData, setFilterData] = useState(RESTAURANT_DATA?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    return (
        <div className='body'>
            {/* <div className='Search'>Search</div> */}
            
            <button 
                className='p-4' 
                onClick={() => {
                    console.log(RESTAURANT_DATA.data)
                    const data = filterData.filter(data => data?.info?.avgRating > 4.2)
                    setFilterData(data);
                }}
            >Top rated restaurant</button>

            <div className='res-container flex'>
                {
                    filterData.map((data)=> (
                        <RestaurantCard key={data?.info?.id}
                        resData={data}
                    />
                    ))
                }
            </div>
        </div>
    )
}