import React from 'react';

import MockData from './data/MOCK_DATA.json';

import AppBarWeb from './components/commons/AppBarWeb';
import HomeLayout from './components/HomeLayout';

import { FilterPriceProvider } from './contexts/FilterPrice_Context';

function App() {

  let listItems = MockData;

  return (
    <>
      <FilterPriceProvider>
        <AppBarWeb />
        <HomeLayout
          items={listItems}
        />
      </FilterPriceProvider>
    </>
  );
}

export default App;
