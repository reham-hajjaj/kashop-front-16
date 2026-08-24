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
import i18n from '../../i18next';
import useThemeStore from '../../store/useThemeStore';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
export default function Navbar() {
  const navigate =useNavigate();
  const token =useAuthStore((state)=>state.token);
  const logout = useAuthStore((state)=>state.logout);
const{t} =useTranslation();

const changeLanguage =(lng)=>{
  const newLang =i18n.language == "ar"?"en":"ar"
  i18n.changeLanguage( newLang); 
}
  
  const handleLogout =()=>{
    logout();
    navigate('/login'); 
  }
  const {mode,toggleMode}=useThemeStore();
  console.log(token); 
  return (
    
    <Box  sx={{ display: "flex", gap: 2, mr: "auto" }} >
       <AppBar position="static" sx={{background:"#fff",pX:0,minHeight:"56pX"}} elevation={3}>
      <Toolbar sx={{position:"relative"}} >
        <Typography variant='h5' component="div" sx={{ fontWeight:"bold",letterSpacing:2,color:"#000"}} >
          KASHOP
        </Typography>
       
        <Typography variant= "h6" sx={{flexGrow:1 ,fontWeight:"bold"}}></Typography>
        <IconButton onClick={toggleMode}>
          {mode=="light"?<DarkModeIcon />:<LightModeIcon sx={{color:"#FFD54F"}}/> }
          
        </IconButton>
         <Button  onClick={changeLanguage} sx={{color:"red"}}>
          {i18n.language ==="ar"?"EN":"AR"}
        </Button>
        <Box sx={{display: "flex",alignItems: "center",gap: { xs: 0, sm: 0.5,md: 1, },}}>
          <IconButton component={Link}>
             <HomeIcon sx={{color:"black"}}/>
          </IconButton>
         

 <Button color="#000" >
   <Link to="/profile"><PersonIcon/></Link>
</Button>
<Button  color="#000">
 <Link to="/cart"><AddShoppingCartIcon/></Link>
</Button>
        </Box>
       
<Box sx={{display: {xs: "none",md: "flex",  },alignItems: "center",gap: { md: 2, lg: 4, }, }}>
<Button  color="#000">
 <Link to="/shop">{t('Shop')}</Link>
</Button>

<Button color="#000" >
   <Link to="/products">{t('Products')}</Link>
</Button>
</Box>

 {token?<>
 <Button color="error" variant="contained" size="small"> 
  <Link to="/login" component="button"onClick={handleLogout}><MenuIcon/></Link>
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
