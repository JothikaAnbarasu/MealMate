import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavbarProvider } from './context/navbar_context';
import { RestaurantsProvider } from './context/restaurants_context';
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import AOSInitializer from './helpers/AosInitializer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AOSInitializer>
    <RestaurantsProvider>
      <FilterProvider>
        <CartProvider>
          <NavbarProvider>
            <App />
          </NavbarProvider>
        </CartProvider>
      </FilterProvider>
    </RestaurantsProvider>
  </AOSInitializer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

