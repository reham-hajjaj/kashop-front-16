
import axios from 'axios'
import useCart from '../../hooks/useCart.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React,  { useEffect } from 'react'


export default function Cart() {

 const {data, isLoading, isError,error} = useCart()
 if(isLoading) return <CircularProgress/>
 if (isError) return <Typography>{error}</Typography>
 console.log (data);

 return(
  <>
  </>
 )
}
