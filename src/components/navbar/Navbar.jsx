import React from 'react'
import"./Navbar";
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';
export default function Navbar() {
  const navigate =useNavigate();
  const token =useAuthStore((state)=>state.token);
  const logout = useAuthStore((state)=>state.logout);
  const handleLogout =()=>{
    logout();
    navigate('/login');
  }
  console.log(token); 
  return (
    <Box sx={{display:"flex", gap:2,mr:"auto" }} sx={{display:{xs:"none", md:"flex"}}} >
       <appBar postion="static">
      <Toolbar >
        <Typography variant= "h6" sx={{flexGrow:1 ,fontWeight:"bold"}}></Typography>
       
        <Button color="inherit">
          <Link to="/">Home</Link>
        </Button>
<Button color="inherit" >
   <Link to="/products">Products</Link>
</Button>
 
 {token?<>
 <Button color="error" variant="contained"> 
  <Link to="/login" component="button"onClick={handleLogout}>Logout</Link>
 </Button >


 </>:
 <>
 <Button >
  <Link to="/login">Login</Link>
 </Button>
 <Button  color="inherit">
 <Link to="/cart">Cart</Link>
</Button>

<Button variant="contained">
   <Link to="/register">Register</Link>
</Button>
 
 </>

 }
      </Toolbar>

 
    </appBar>
 
    </Box>
   
 
 
    
  

  
  
   
   
  )
}
