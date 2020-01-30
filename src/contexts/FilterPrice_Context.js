import React, { useState, createContext } from 'react';
import dataItem from '../data/MOCK_DATA.json';

// create context
export const FilterPriceContext = createContext({});

// create provider
export const FilterPriceProvider = (props) => {

  const [ filteredItem, setFilteredItem ] = useState(dataItem);

  const contextValue = {
    filteredItem,
    setFilteredItem,
  }

  return (
    <FilterPriceContext.Provider value={contextValue}>
      {props.children}
    </FilterPriceContext.Provider>
  )
}
