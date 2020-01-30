import React, { useEffect, useContext, useState, useRef } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import FilterItems from './Home/FilterItems';
import CardItem from './Home/CardItem';

import { FilterPriceContext } from '../contexts/FilterPrice_Context';

const HomeLayout = (props) => {

  let { filteredItem } = useContext(FilterPriceContext);

  return (
    <Container
      maxWidth={"lg"}
      style={{ padding: 50, height: "100%" }}
    >
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
    </Container>
  );
}

export default HomeLayout;
