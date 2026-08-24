import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'


function ProductFilter({ onApply }) {
  const [filter, setFilter] = useState({ page: 1, limit:3,minPrice: "",maxPrice: "", sortBy: "price",  ascending: false,});

  const handleApplyFilter = (newFilter) => {
  console.log("FILTER SENT:", newFilter);

  setFilter({...newFilter,page: 1,});};
  return (
  
 <Card sx={{p: 2,  width: "100%",display: "flex",flexDirection: "column", gap: 2, }}>
  <Box sx={{display: "flex",flexDirection: "column",gap: 2,}}>
<TextField label="Min price"variant="outlined" type="number" autoComplete="off"  value={filter.minPrice} onChange={(e) =>setFilter({...filter, minPrice: e.target.value})}/>
       <TextField label="Max price" variant="outlined"type="number"value={filter.maxPrice}onChange={(e) =>setFilter({ ...filter,maxPrice: e.target.value })}/>
<FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="sort-label">Sort By</InputLabel>

        <Select
          labelId="sort-label"
          value={filter.sortBy}
          label="Sort By"
          onChange={(e) =>
            setFilter({
              ...filter,
              sortBy: e.target.value,
            })
          }
        >
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="rate">Rate</MenuItem>
        </Select>
      </FormControl> 
     
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="order-label">Order</InputLabel>

          <Select
            labelId="order-label"
            value={filter.ascending}
            label="Order"
            onChange={(e) =>
              setFilter({
                ...filter,
                ascending: e.target.value === "true",
              })
            }
          >
            <MenuItem value="false">Descending</MenuItem>
            <MenuItem value="true">Ascending</MenuItem>
          </Select>
        </FormControl>
         
  </Box>

     
      <Button variant="contained" color="success"onClick={() => onApply(filter)} >Apply Filter </Button>

    </Card>
      
  
   
  )
}

export default ProductFilter
