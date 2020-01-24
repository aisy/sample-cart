import React from 'react';

import AppBarWeb from './components/commons/AppBarWeb';
import HomeLayout from './components/HomeLayoutNew';

import { FilterPriceProvider } from './contexts/FilterPrice_Context';

function App() {
  return (
    <>
      <FilterPriceProvider>
        <AppBarWeb />
        <HomeLayout />
      </FilterPriceProvider>
    </>
  );
}

export default App;
