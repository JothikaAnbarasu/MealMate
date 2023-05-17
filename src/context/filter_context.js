import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import { useRestaurantsContext } from './restaurants_context';
const initialState = {
  all_restaurants: [],
  filtered_restaurants: [],
  filters: {
    text: '',
    ratings: false,
    veg: false,
    fastDelivery: false,
    offer: false,
    cuisine: 'All'
  }
}

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const { restaurants } = useRestaurantsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (restaurants) {
      dispatch({ type: "load_restaurants", payload: restaurants })
    }
  }, [restaurants])

  const updateFilters = (name, value) => {
    dispatch({ type: "update_filters", payload: { name, value } })
  }

  useEffect(() => {
    dispatch({ type: "filter_restaurants" });
  }, [restaurants, state.filters])

  return (
    <FilterContext.Provider value={{ ...state, updateFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return (useContext(FilterContext))
}