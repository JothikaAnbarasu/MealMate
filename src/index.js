import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavbarProvider } from './context/navbar_context';
import { RestaurantsProvider } from './context/restaurants_context';
import { FilterProvider } from './context/filter_context'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RestaurantsProvider>
    <FilterProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </FilterProvider>
  </RestaurantsProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

