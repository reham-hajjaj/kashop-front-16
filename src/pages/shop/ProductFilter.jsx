import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'

function ProductFilter() {
  const[filter,setFilter]=useState({
    page:1,limit:6 ,minPrice:"",maxPrice:"",sortBy:"price",ascending:"false"
  });

  
    
     
  return (
    
 <Card sx={{p:2,mb:3,display:"flex",gap:2, flexDirection:"column" }}>
  <Box sx={{display:"flex", gap:2}}>
<TextField label="Min price" variant="outlined" type='number' value={filter.minPrice} onChange={(e)=>({setFilter,filter,minPrice:e.target.value})}> </TextField>
       <TextField label="Max price" type='number'  variant="outlined" value={filter.maxPrice} onChange={(e)=>({setFilter,filter,maxPrice:e.target.value})} > </TextField>
  </Box>

      
       <FormControl sx={{minWidth:200}}>
           <InputLabel>Sort By price</InputLabel>
           <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={filter.ascending}
           label="Sort By price"
           onChange={(e)=>({setFilter,filter,ascending:e.target.value})
           
           
         }
           
         >
           <MenuItem value={false}> Price High To Low</MenuItem>
           <MenuItem value={true}> Price Low To High</MenuItem>
       
         </Select>
          </FormControl>
          <Button variant='contained' onClick={()=>{setFilter,filter}}>Apply Filter</Button>

    </Card>
      
  
   
  )
}

export default ProductFilter
