import React, { useState, createContext } from 'react'

// create context
export const FilterPriceContext = createContext({});

// create provider
export const FilterPriceProvider = (props) => {

  const [ filteredItem, setFilteredItem ] = useState({});

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
