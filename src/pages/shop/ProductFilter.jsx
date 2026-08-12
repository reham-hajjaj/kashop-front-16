import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

function ProductFilter() {
  const[filter,setFilter]=useState({
    page:1,limit:6 ,minPrice:"",maxPrice:"",sortBy:"price",ascending:"false"
  });

  const handleApply=()=>{onApply(filter);};
    
     
  return (
    
 <Card sx={{p:2,mb:3,display:"flex",gap:2, flexDirection:"column" }}>
  <Box sx={{display:"flex", gap:2}}>
<TextField label="Min price" variant="outlined" type='number' value={filter.minPrice} autoComplete='off' onChange={(e)=>setFilter({...filter,minPrice:e.target.value})}> </TextField>
       <TextField label="Max price" type='number'  variant="outlined" value={filter.maxPrice}  autoComplete='off' onChange={(e)=>setFilter({...filter,maxPrice:e.target.value})} > </TextField>
  </Box>

      
       <FormControl sx={{minWidth:200}}>
           <InputLabel id="Sort-label"> Sort By</InputLabel>
           <Select
           labelId="sort-label"
           id="demo-simple-select"
           value={filter.sortBy}
           label="Sort By price"
           onChange={(e)=>setFilter({...filter,ascending:e.target.value==="true",})
           
           
         }
           
         >
           <MenuItem value="price"> Price</MenuItem>
           <MenuItem value="name"> Name</MenuItem>
            <MenuItem value="rate"> Rate </MenuItem>
             
       
         </Select>
          </FormControl>
          <Button variant='contained'  color='success'  onClick={handleApply}>Apply Filter</Button>

    </Card>
      
  
   
  )
}

export default ProductFilter
