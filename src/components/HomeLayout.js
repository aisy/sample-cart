import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import FilterItems from './commons/Home/FilterItems';
import CardItem from './commons/Home/CardItem';

function App() {
  return (
    <Container
      maxWidth={"lg"}
      style={{ padding: 50 }}
    >
      <FilterItems />
      <Grid container spacing={2}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </Grid>
    </Container>
  );
}

export default App;
