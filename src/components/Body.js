import { useState, useEffect } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { SWIGGY_API_URL } from "../constants/api-url";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurandCardPromoted = withPromotedLabel(RestaurantCard)

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setFilterData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h1>Looks like your internet is not working</h1>;

  return (
    // conditional rendering
    !filterData?.length ? (
      <Shimmer />
    ) : (
      <div className="">
        <div className="flex">
          <div className="m-1 p-1">
            <input
              type="text"
              data-testid = "searchInput"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
              className="border border-solid border-black rounded-sm"
              placeholder="Search restaurants...."
            />
            <button
              className="px-4 py-2 bg-gray-100 m-4 rounded-md"
              onClick={() => {
                setFilterData(
                  listOfRest.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLocaleLowerCase())
                  )
                );
              }}
            >
              Search
            </button>
              
            <button
            className="px-4 py-2 bg-gray-50 rounded-md"
            onClick={() => {
              const data = filterData.filter(
                (data) => data?.info?.avgRating > 4.2
              );
              setFilterData(data);
            }}
          >
            Top rated restaurants
            </button>

          </div>

        
        </div>
        <div className="flex flex-wrap">
          {filterData?.map((data) => (
            <Link key={data.info.id} to={"restaurant/" + data.info.id}>
              {
               // <RestaurandCardPromoted/> 
               <RestaurantCard key={data?.info?.id} resData={data} />
              }
            </Link>
          ))}
        </div>
      </div>
    )
  );
};

export default Body;
