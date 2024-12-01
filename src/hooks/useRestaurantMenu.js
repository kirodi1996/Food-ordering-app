import { useEffect } from "react";
import { RESTAURANT_API_URL } from "../constants/api-url";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchMenu();
    }, []);    
    
    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_API_URL+resId);
        const json = await data.json();
        setResInfo(json);
    }

    return resInfo
}

export default useRestaurantMenu;