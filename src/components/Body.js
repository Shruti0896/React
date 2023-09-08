import RestaurantCard from "./RestaurantCard";
import restArr from "../utils/mockData";
import { useEffect, useState } from "react";
import { RES_API } from "../utils/costants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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

  swiggy_api = RES_API;

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
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
