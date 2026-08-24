import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'


function ProductFilter({ onApply }) {
  const [filter, setFilter] = useState({ page: 1, limit: 6,minPrice: "",maxPrice: "", sortBy: "price",  ascending: false,});

  const handleApply = () => {
    onApply(filter);
  };
     
  return (
  
 <Card sx={{p:2,mb:3,display:"flex",gap:2, flexDirection:"column" }}>
  <Box sx={{display:"flex", gap:2,flexWrap:"wrap"}}>
<TextField label="Min price"variant="outlined" type="number"  value={filter.minPrice}  onChange={(e) =>setFilter({ ...filter,minPrice: e.target.value,}) } />
       <TextField label="Max price" variant="outlined"type="number"value={filter.maxPrice}onChange={(e) =>setFilter({...filter,maxPrice: e.target.value,}) }/>
  </Box>

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
     
         
      <Button variant="contained"color="success"onClick={handleApply}>Apply Filter </Button>

    </Card>
      
  
   
  )
}

export default ProductFilter
