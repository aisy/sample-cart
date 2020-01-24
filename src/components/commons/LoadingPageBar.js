import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

function LoadingPageBar() {
  const classess = styles();

  return (
    <div className={classess.layoutLoading}>
      <CircularProgress />
    </div>
  )
}

const styles = makeStyles({
  layoutLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoadingPageBar
