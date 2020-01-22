import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import FilterItems from './commons/Home/FilterItems';
import CardItem from './commons/Home/CardItem';

const HomeLayout = (props) => {

  const listItems = props.items;

  useEffect(() => {
    console.log(listItems)
  }, [ listItems ]);

  return (
    <Container
      maxWidth={"lg"}
      style={{ padding: 50 }}
    >
      <FilterItems />
      <Grid container spacing={2}>
        {
          listItems.map(items => {
            return (
              <CardItem key={items.id} />
            )
          })
        }
      </Grid>
    </Container>
  );
}

export default HomeLayout;
