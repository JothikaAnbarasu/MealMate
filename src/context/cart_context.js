import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducers/cart_reducer';

const getLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    }
  } catch (error) {
    console.error('Error parsing JSON from local storage:', error);
  }

  // Return default value or handle the error case as per your requirements
  return [];
};


const initialState = {
  cart: getLocalStorage('cart'),
  total_items: 0,
  total_price: 0,
  isCheckoutOpen: false,
  isOrderPlacedModalOpen: false
}

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item, amount, restaurantName) => {
    dispatch({ type: "add_to_cart", payload: { item, amount, restaurantName } })
  }
  const toggleAmount = (id, value) => {
    dispatch({ type: "toggle_amount", payload: { id, value } })
  }
  const removeItem = (id) => {
    dispatch({ type: "remove_item", payload: id })
  }
  const clearCart = () => {
    dispatch({ type: "clear_cart" })
  }

  const openCheckout = () => {
    dispatch({ type: "open_checkout" })
  }

  const closeCheckout = () => {
    dispatch({ type: "close_checkout" })
  }

  const openOrderPlacedModal = () => {
    dispatch({ type: "open_order_placed_modal" })
  }

  const closeOrderPlacedModal = () => {
    dispatch({ type: "close_order_placed_modal" })
  }

  useEffect(() => {
    dispatch({ type: "count_cart_totals" })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{
      ...state, addToCart, toggleAmount, clearCart, removeItem, openCheckout, closeCheckout, openOrderPlacedModal, closeOrderPlacedModal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext);
}