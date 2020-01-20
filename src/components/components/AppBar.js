import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { InputBase } from '@material-ui/core';



function AppBar() {
  return (
    <AppBar>
      <div>
        <InputBase
          placeholder={"Pencarian"}
        />
      </div>
    </AppBar>
  )
}

export default AppBar
