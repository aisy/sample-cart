import React from 'react';

import AppBarWeb from './components/commons/AppBarWeb';
import HomeLayout from './components/HomeLayout';

import MockData from './data/MOCK_DATA.json';

function App() {

  const listItems = MockData;

  return (
    <>
      <AppBarWeb />
      <HomeLayout
        items={listItems}
      />
    </>
  );
}

export default App;
