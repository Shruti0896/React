import {RES_IMG} from "../utils/costants";

const RestaurantCard = ({resData}) => {
    const { name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId } = resData;
    return(
      <div className="res-card"> 
      <img className="res-img" src={RES_IMG+cloudinaryImageId} alt="" />
          <h3>{name}</h3>
          <h5>{cuisines.join(" , ")}</h5>
          <h5>{avgRating} star</h5>
          <h5>{deliveryTime}</h5>
          <h5>{costForTwo}</h5>
        <div>
        </div>
      </div>
    )
  }

  export default RestaurantCard;