import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import useProducts from '../../hooks/useProducts'
import  Categories from '../../components/categories/Categories';
import Products from '../products/Products';
export default function Home() {
  return (
  <Box>
  <Categories/>
  <Products/>
  </Box>
  
  )
}
