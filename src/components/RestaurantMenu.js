import React, { useEffect } from 'react'
import {useState, useEffect} from 'react'
import { RESTAURANT_API_URL } from '../constants/api-url'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=> {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_API_URL+resId);
        const json = await data.json();
        setResInfo(json);
        console.log(json);
    }
     
    if(!resInfo) return;

    const {name, cuisines, avgRating, costForTwoMessage} = resInfo?.data?.cards?.[2]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  return (
    resInfo === null ? <Shimmer /> :
    <div className='menu'>
        <h1>{name}</h1>
        <h2>{cuisines.join(',')} - {costForTwoMessage}</h2>
        <h2>{avgRating}</h2>
        <ul>
            {itemCards?.map(item => 
            <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} - {'Rs.'} {item?.card?.info.price/100 || item?.card?.info.defaultPrice/100}
            </li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu
