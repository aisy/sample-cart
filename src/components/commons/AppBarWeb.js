import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function AppBarWeb() {
  return (
    <AppBar
      position={"static"}
    >
      <Toolbar>
        <Typography className={useStyle.title} variant={"h6"}>
          Sample cart
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const useStyle = makeStyles(theme => ({
  title: {
    display: "none",
  }
}))

export default AppBarWeb
