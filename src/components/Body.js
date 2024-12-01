import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { SWIGGY_API_URL } from '../constants/api-url';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../hooks/useOnlineStatus';

const Body = () => {
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
    
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <h1>Looks like your internet is not working</h1>

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
                       <Link key={data.info.id} to={'restaurant/' + data.info.id}>
                        <RestaurantCard key={data?.info?.id}
                            resData={data}
                        />
                       </Link> 
                    ))
                }
            </div>
        </div>
    )
}

export default Body;