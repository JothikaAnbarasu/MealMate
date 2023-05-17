import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/restaurants_reducer";

const RestaurantsContext = createContext();

const initialState = {
  restaurants: [],
  singleRestaurant: {},
}

export const RestaurantsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRestaurants = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(jsonData => dispatch({ type: "get_restaurants_success", payload: jsonData }))
      .catch(error => console.log(error));
  }

  const getSingleRestaurantMenu = (restaurantName) => {
    dispatch({ type: "get_single_restaurant_menu", payload: restaurantName })
  }

  return (
    <RestaurantsContext.Provider value={{ ...state, fetchRestaurants, getSingleRestaurantMenu }}>
      {children}
    </RestaurantsContext.Provider >
  )


}

export const useRestaurantsContext = () => {
  return useContext(RestaurantsContext)
}