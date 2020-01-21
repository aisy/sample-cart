import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CardItem() {
  const classes = stylesCard();

  const rupiahConvert = (value) => {
    let reverse = value.toString().split('').reverse().join(''),
      thousand = reverse.match(/\d{1,3}/g);
    thousand = thousand.join('.').split('').reverse().join('');
    return "Rp. " + thousand;
  }

  return (
    <Card className={classes.card}>
      <div className={classes.dummy} />
      <CardContent>
        <Typography gutterBottom variant={"subtitle1"}>
          <Box fontWeight={600}>
            {"Apple iPad 7 2019 / iPad 10.2 Inch Wifi Only 32GB Gold Grey Silver".substr(0, 20) + "..."}
          </Box>
        </Typography>
        <Typography gutterBottom variant={"subtitle1"} className={classes.price}>
          <Box fontWeight={700}>
            {rupiahConvert(800000)}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  )
}

const stylesCard = makeStyles({
  card: {
    maxWidth: 200,
  },
  media: {
    height: 140
  },
  dummy: {
    height: 140,
    backgroundColor: "#cfd8dc",
  },
  price: {
    color: "#ff5722"
  }
})

export default CardItem
