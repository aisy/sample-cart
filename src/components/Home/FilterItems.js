import React, { useState, useContext } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { FilterPriceContext } from '../../contexts/FilterPrice_Context';

function FilterItems() {
  const classes = styles();
  const [ filteredBy, setfilteredBy ] = useState("sesuai");
  const { filteredItem, setFilteredItem, } = useContext(FilterPriceContext)

  const handleChange = event => {
    let valueHandle = event.target.value;
    let sorted = {};

    if (valueHandle === "harga-rendah") {
      sorted = [ ...filteredItem ].sort((a, b) => {
        return a.price - b.price;
      });
    } else if (valueHandle === "harga-tinggi") {
      sorted = [ ...filteredItem ].sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      sorted = filteredItem;
    }

    setFilteredItem(sorted);
    setfilteredBy(valueHandle);
  }

  return (
    <div className={classes.formLayout}>
      <Box fontWeight={"600"} fontSize={18} className={classes.textLayout}>
        Urutkan:
      </Box>
      <FormControl
        variant={"outlined"}
        className={classes.formControl}
      >
        <Select
          labelId="filter"
          id="filter"
          value={filteredBy}
          onChange={handleChange}
        >
          <MenuItem value={"sesuai"}>Paling Sesuai</MenuItem>
          <MenuItem value={"harga-rendah"}>Harga Terendah</MenuItem>
          <MenuItem value={"harga-tinggi"}>Harga Tertinggi</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

const styles = makeStyles(theme => ({
  formLayout: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  textLayout: {
    display: "flex",
    alignItems: "center",
    marginRight: 20,
  },
  formControl: {
    width: 180,
  }
}))

export default FilterItems
