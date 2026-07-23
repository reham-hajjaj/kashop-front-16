
import {RouterProvider } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import router from './routes/routes';
import i18next from 'i18next';
export default function App() {
  
const queryClient = new QueryClient()
  return (
  <>
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen= {false} />
 <RouterProvider router={router} />
</QueryClientProvider>

  </>
  
  )
}