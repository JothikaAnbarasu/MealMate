

const filter_reducer = (state, action) => {
  if (action.type === 'load_restaurants') {
    return { ...state, all_restaurants: [...action.payload], filtered_restaurants: [...action.payload] }
  }

  if (action.type === "update_filters") {
    const { name, value } = action.payload;
    if (value === undefined) {
      const toggledValue = !state.filters[name]; // Toggle the value

      return { ...state, filters: { ...state.filters, [name]: toggledValue } };
    }
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === "filter_restaurants") {
    const { all_restaurants } = state;
    const { text, ratings, veg, fastDelivery, offer, cuisine } = state.filters;
    let tempRestaurants = [...all_restaurants]

    if (text) {
      tempRestaurants = tempRestaurants.filter((r) => {
        return r.name.toLowerCase().startsWith(text)
      })
    }

    if (ratings) {
      tempRestaurants = tempRestaurants.filter((r) => {
        return r.rating > 4.5
      })
    }

    if (veg) {
      tempRestaurants = tempRestaurants.filter((r) => r.veg)
    }

    if (fastDelivery) {
      tempRestaurants = tempRestaurants.filter((r) => r.fastDelivery)
    }

    if (offer) {
      tempRestaurants = tempRestaurants.filter((r) => r.offers)
    }

    if (cuisine !== 'All') {
      tempRestaurants = tempRestaurants.filter((r) => {
        return r.menu.some((obj) => obj.cuisine == cuisine)
      })
    }

    return { ...state, filtered_restaurants: tempRestaurants }
  }
  return state;
}

export default filter_reducer;