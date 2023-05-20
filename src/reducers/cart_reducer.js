

const cart_reducer = (state, action) => {

  if (action.type === "add_to_cart") {
    const { item, amount, restaurantName } = action.payload;

    const tempItem = state.cart.find((i) => i.id === item.name + item.restaurantName)

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        let newAmount = cartItem.amount + amount;
        return { ...cartItem, amount: newAmount }
      })
      return { ...state, cart: tempCart }
    }
    else {
      const newItem = {
        id: item.name + item.restaurantName,
        name: item.name,
        restaurantName: restaurantName,
        image: item.image,
        amount: amount,
        price: item.price,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }

  }

  if (action.type === "remove_item") {
    const tempCart = state.cart.filter((item) => {
      return item.id !== action.payload
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === "toggle_amount") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {

        if (value === 'inc') {
          let newAmount = item.amount + 1;
          return { ...item, amount: newAmount }

        }

        if (value === 'dec') {
          let newAmount = item.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...item, amount: newAmount }
        }

      }
      else {
        return item
      }
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === "count_cart_totals") {

    const { total_items, total_price } = state.cart.reduce((total, cartItem) => {
      const { price, amount } = cartItem
      total.total_items += amount
      total.total_price += price * amount
      return total
    }, { total_items: 0, total_price: 0 })

    return { ...state, total_items, total_price }
  }

  if (action.type === "clear_cart") {
    return { ...state, cart: [] }
  }

  if (action.type === "open_checkout") {
    return { ...state, isCheckoutOpen: true }
  }


  if (action.type === "close_checkout") {
    return { ...state, isCheckoutOpen: false }
  }

  if (action.type === "open_order_placed_modal") {
    return { ...state, isOrderPlacedModalOpen: true }
  }
  if (action.type === "close_order_placed_modal") {
    return { ...state, isOrderPlacedModalOpen: false }
  }

  return state;

}

export default cart_reducer;