
import {RouterProvider } from 'react-router';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import router from './routes/routes';
import './i18next.jsx'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.jsx';
import { CssBaseline } from '@mui/material';
import useThemeStore from './store/useThemeStore.jsx';
import getTheme from './theme.jsx';


export default function App() {
  const {i18n}=useTranslation();
  useEffect(()=>{
    const dir = i18n.language ==="ar" ? "rtl":"ltr";
document.documentElement.dir=dir;
  },
  [i18n.language]
)
  const mode =useThemeStore((state)=>state.mode);
  
const queryClient = new QueryClient()
  return (
  <>
  <QueryClientProvider client={queryClient}>
    
      
  
    <ReactQueryDevtools initialIsOpen= {false} />
    <ThemeProvider theme={getTheme(mode)}>
        <CssBaseline/>
        <RouterProvider router={router} />
    </ThemeProvider>
    
       

  
</QueryClientProvider>

  </>
  
  )
}