import React, {useState, useEffect, createContext, useMemo, Children} from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({children}) => {

    const[restaurants,setRestaurants] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest().then(restaurantsTransform).then((results) => {
                setIsLoading(false);
                setRestaurants(results);
                
            }).catch((err) => {
                setError(err);
                setIsLoading(false);
            })
        }, 2000)
    };
    useEffect(() =>{
        retrieveRestaurants()
    },[])
    console.log(restaurants);
    return(
        <RestaurantContext.Provider 
        value={{
            restaurants,
            isLoading,
            error
            }}>
            {children}
        </RestaurantContext.Provider>
    )
}