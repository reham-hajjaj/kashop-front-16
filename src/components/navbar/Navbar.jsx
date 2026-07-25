import React from 'react'
import"./Navbar";
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const navigate =useNavigate();
  const token =useAuthStore((state)=>state.token);
  const logout = useAuthStore((state)=>state.logout);
const{t} =useTranslation();
  const handleLogout =()=>{
    logout();
    navigate('/login');
  }
  console.log(token); 
  return (
    
    <Box sx={{display:"flex",  gap:2, mr:"auto",display:{xs:"none", md:"flex"} }}  >
       <AppBar postion="static" sx={{background:"#1976d2",PX:0,minHeight:"56PX"}} elevation={3}>
      <Toolbar >
        <Typography variant='h5' component="div" sx={{ fontWeight:"bold",letterSpacing:2,color:"#070607"}} >
          KASHOP
        </Typography>
        <Typography variant= "h6" sx={{flexGrow:1 ,fontWeight:"bold"}}></Typography>
       
        <Button color="inherit" >
          <Link to="/">{t('Home')}</Link>
        </Button>
<Button color="inherit" >
   <Link to="/products">{t('Products')}</Link>
</Button>
 
<Button  color="inherit">
 <Link to="/cart">{t('Cart')}</Link>
</Button>
 
 {token?<>
 <Button color="error" variant="contained"> 
  <Link to="/login" component="button"onClick={handleLogout}>Logout</Link>
 </Button >


 </>:
 <>
 <Button >
  <Link to="/login">{t('Login')}</Link>
 </Button>

<Button variant="contained">
   <Link to="/register">{t('Register')}</Link>
</Button>
 
 </>

 }
      </Toolbar>

 
    </AppBar>
 
    </Box>
   
 
 
    
  

  
  
   
   
  )
}
