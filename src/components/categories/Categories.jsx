import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { CircularProgress, Container, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import Box from '@mui/material/Box';
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTranslation } from 'react-i18next';
export default function Categories() {
 const { data, isError, isLoding , error }=useCategories();
const{t} =useTranslation();
 console.log(data?.response?.data)
  
  if(isLoding)return<CircularProgress/>;
  if(isError) return<Typography color='red'>{error} </Typography>
  return (
    <Container sx={{ mt:12}}>

      <Typography variant='h4' sx={{color:"#0097a7",mb:4, }}  fontWeigth="bold" >{t('Categories')}</Typography>
      <Grid container spacing={3}>
        {data?.response?.data?.map((category)=>{
        <Grid item size={{ xs: 12, sm:6, md: 4}} key={category.id} >
          <Card  sx={{ display:"flex",justifyContent:"center", alignItems:"center" ,borderRadius:3, boxShadow:3}}>
<CardContent>
<Typography variant='h6' align="center">{category.name}</Typography>
</CardContent>
          </Card >
        </Grid>
    return <h4 key={category.id}>{category.name}</h4>

   })}
      </Grid>
  
    </Container>
  )
}


