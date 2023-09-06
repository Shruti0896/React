import RestaurantCard from "./RestaurantCard";
import restArr from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [inputData, setInputData] = useState("");

  const handleChange = () => {
    return setFilterData(data.filter((res) => res.info.avgRating > 4.3));
  };

  const handleSearch = () => {
    return setFilterData(data.filter(res=>res.info.name.toLowerCase().includes(inputData.toLowerCase())));
  }

  useEffect(() => {
    fetchData();
  }, []);

  swiggy_api =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const fetchData = async () => {
    const data = await fetch(swiggy_api);
    const json = await data.json();
    console.log(json);
    setData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="filter-search">
          <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} />
          <button className="filter-search-btn" 
         onClick={handleSearch} >Search</button>
        </div>
        <button className="filter-btn" onClick={handleChange}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
