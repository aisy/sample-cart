import React, { useEffect, useContext, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import FilterItems from './Home/FilterItems';
import CardItem from './Home/CardItem';

import { FilterPriceContext } from '../contexts/FilterPrice_Context';

const HomeLayout = (props) => {

  let { setFilteredItem, filteredItem } = useContext(FilterPriceContext);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const setData = async () => {
      let listItems = await fetch("https://api.myjson.com/bins/cnwgq");
      let items = await listItems.json();
      setFilteredItem(listItems.data);
      setLoading(false);
    }

  }, [ filteredItem ]);

  const ThePage = () => (
    <div>
      <FilterItems />
      <Grid container spacing={2}>
        {
          filteredItem.map(items => {
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
    <Container
      maxWidth={"lg"}
      style={{ padding: 50 }}
    >
      {
        loading ? <CircularProgress /> : <ThePage />
      }
    </Container>
  );
}

export default HomeLayout;
