import React from 'react'

import router from './routes'
import {RouterProvider } from  'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

export default function App() {
  return (
  <>
 <RouterProvider router={router} />

  </>
  
  )
}