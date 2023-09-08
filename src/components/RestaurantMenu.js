import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/costants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [menu, setMenu] = useState([]);

    const { resId } = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    // 10576

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards);
        if(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards)
        setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards);
        else
        setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    }

    if(menu.length === 0) return <Shimmer />

    return <div className="restaurant-menu">

        {menu?.map(item=>{
            return <li key={item.card.info.id}>{item.card.info.name} -- {item.card.info.price/100|| item.card.info.defaultPrice/100}</li>
        })}

    </div>
}

export default RestaurantMenu;