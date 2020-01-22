import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function CardItem(props) {
  const classes = stylesCard();

  let price = props.price ? props.price : 800000;
  let itemName = props.itemName ? props.itemName : "Item Name";

  const rupiahConvert = (value) => {
    let reverse = value.toString().split('').reverse().join(''),
      thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join('.').split('').reverse().join('');
    return "Rp. " + thousand;
  }

  const nameConvert = (value) => {
    return value.length >= 20 ? value.substr(0, 20) + "..." : value;
  }

  return (
    <Grid item>
      <Card className={classes.card}>
        <div className={classes.dummy} />
        <CardContent>
          <Box fontWeight={"700"}>
            {nameConvert(itemName)}
          </Box>
          <Box fontWeight={"700"} className={classes.price}>
            {rupiahConvert(price)}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}

const stylesCard = makeStyles({
  card: {
    width: 223,
    marginBottom: 20,
  },
  dummy: {
    height: 240,
    backgroundColor: "#cfd8dc",
  },
  price: {
    color: "#ff5722"
  }
})

export default CardItem
