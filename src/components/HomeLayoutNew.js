import React, { useEffect, useContext, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import FilterItems from './Home/FilterItems';
import CardItem from './Home/CardItem';
import LoadingPageBar from './commons/LoadingPageBar';

import { FilterPriceContext } from '../contexts/FilterPrice_Context';

const HomeLayout = (props) => {

  let { setFilteredItem, filteredItem } = useContext(FilterPriceContext);
  let [ dataProducts, setDataProducts ] = useState({});
  // let [ filteredPrice, setFilteredPrice ] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const setData = async () => {
      try {
        let listItems = await fetch("https://api.myjson.com/bins/cnwgq");
        let items = await listItems.json();
        setDataProducts(items.data);
        setLoading(false);
      } catch (error) {
        console.warn(error)
      }
    }
    setData();
  }, []);

  const ThePage = () => (
    <div>
      <FilterItems />
      <Grid container spacing={2}>
        {
          dataProducts.map(items => {
            return (
              <CardItem
                key={items.id}
                itemName={items.name_item}
                price={items.price}
              />
            )
          })
        }
      </Grid>
    </div>
  );

  return (
    <div
      style={{ padding: 50, height: "100%" }}
    >
      {/* {
        loading ? <CircularProgress /> : <ThePage />
      } */}
      <LoadingPageBar />
    </div>
  );
}

export default HomeLayout;
