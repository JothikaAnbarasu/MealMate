import React, { useState } from 'react'
import './Filters.css'
import { CiSliderHorizontal } from 'react-icons/ci'
import { FaTimes } from 'react-icons/fa'
import { useFilterContext } from '../../context/filter_context'

function Filters() {

  const { updateFilters, filters } = useFilterContext();
  const { text, ratings, veg, fastDelivery, offer } = filters;

  const [isCuisineSelected, setIsCuisineSelected] = useState(false);

  let filtersValue = (ratings + veg + fastDelivery + offer + isCuisineSelected)

  const handleCuisineChange = (event) => {
    const selectedCuisine = event.target.value;
    setIsCuisineSelected(selectedCuisine !== 'All');
    updateFilters("cuisine", selectedCuisine);
  };


  return (
    <div className='filters-container'>

      <div className="search-bar">
        <input
          type='search'
          name='text'
          value={text}
          placeholder='Search for restaurants'
          className='search-input '
          onChange={(e) => updateFilters(e.target.name, e.target.value)}
        />
      </div>

      <div className="filters filter-outline" style={{ background: filtersValue > 0 ? "rgb(208,208,208)" : "none" }} >
        {filtersValue > 0 && <span className='filter-value'>{filtersValue}</span>} Filters <CiSliderHorizontal />
      </div>

      <div className={`${ratings ? "filter-outline filter-selected " : "filter-outline "}`}
        onClick={() => {
          updateFilters("ratings");
        }}>
        Ratings 4.5+
        {ratings && <FaTimes />}
      </div>

      <div className={`${veg ? "filter-outline filter-selected " : "filter-outline "}`}
        onClick={() => updateFilters("veg")}>
        Pure veg {veg && <FaTimes />}
      </div>

      <div className={`${fastDelivery ? "filter-outline filter-selected " : "filter-outline "}`}
        onClick={() => updateFilters("fastDelivery")}>
        Fast delivery{fastDelivery && <FaTimes />}
      </div>

      <div className={`${offer ? "filter-outline filter-selected " : "filter-outline "}`}
        onClick={() => updateFilters("offer")}>
        Offers  {offer && <FaTimes />}
      </div>

      <div className={`${isCuisineSelected ? "filter-outline filter-selected " : "filter-outline "}`}>

        <label htmlFor="cuisine-select">Cuisine </label>
        <select id="cuisine-select" name="cuisine" onChange={handleCuisineChange}>

          {["All", "Italian", "South Indian", "Dessert", "Coffee", "Chettinad", "Chinese", "Fast food", "Indian", "American", "Thai"].map((c, i) => {
            return <option key={i} value={c}>{c}</option>
          })}

        </select>
        {isCuisineSelected && <FaTimes />}
      </div>
    </div>
  )
}

export default Filters
