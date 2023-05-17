
const restaurants_reducer = (state, action) => {

  if (action.type === "get_restaurants_success") {
    const data = action.payload;
    return { ...state, restaurants: data.restaurants };
  }

  if (action.type === "get_single_restaurant_menu") {
    const restaurantName = action.payload;
    const allRestaurants = [...state.restaurants];
    const singleRestaurant = { ...allRestaurants.filter((r) => r.name === restaurantName)[0] }
    return { ...state, singleRestaurant }
  }

  return state;
}

export default restaurants_reducer;