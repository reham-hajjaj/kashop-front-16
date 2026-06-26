import React from 'react'

import router from './routes'
import {RouterProvider } from  'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  
const queryClient = new QueryClient()
  return (
  <>
  <QueryClientProvider client={queryClient}></QueryClientProvider>
 <RouterProvider router={router} />

  </>
  
  )
}