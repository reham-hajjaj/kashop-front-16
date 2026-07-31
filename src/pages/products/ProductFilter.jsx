import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductFilter({filter,setFilter}) {
  const [sort,setSort]=useState({
    page:1,limit:3,sortBy:"price",ascending:false
  });
  return (
    <Box>
      <TextField sx={{width:200,m:1}}>lable="Min pric" type="number" value={filter.minPrice} onChange={(e)=>{setFilter,filterminPrice(e.target.value)}} </TextField>
       <TextField sx={{width:200,m:1}}>lable="Max pric" type="number" value={filter.maxPrice} onChange={(e)=>{setFilter,filterminPrice(e.target.value)}} </TextField>

   <FormControl sx={{width:200,m:1}}>
    <InputLabel>Sort</InputLabel>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sort}
    label="Sort"
    onChange={(e)=>{const value = e.target.value;setSort(value);
      setFilter({filter,sortBy:value==="name"?"name":"price", ascending:value==="low"});
    }
    
  }
    
  >
    <MenuItem value={"low"}>Low To High</MenuItem>
    <MenuItem value={"high"}>High To Low</MenuItem>
 <MenuItem value={"name"}>sortByName</MenuItem>
  </Select>
   </FormControl>
    </Box>
       
   
  )
}

