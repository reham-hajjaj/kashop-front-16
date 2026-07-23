import  { useState } from 'react'
import Box from '@mui/material/Box';
import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import axios from 'axios';
import { Construction, Password } from '@mui/icons-material';
import axiosInstance from '../../api/axiosInstance';
import useAuthStore from '../../store/useAuthStore';


export default function Login(){  

 
  const [serverErrors,setServerErrors] =useState([]);
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm();
const setToken =useAuthStore((state)=>state.setToken) 
 const navigate =useNavigate();
  const LoginForm = async(data)=>{
   
try{
const response = await axiosInstance.post("/auth/Account/Login" ,data);
setToken(response.data.accessToken);
console.log(response);
navigate('/');
}catch(err){
  setServerErrors(err.response.data.errors)
  console.log(err.response.data.errors);
}
  }
  return (


   <Box sx={{minHeight:"100vh",display:"flex",justifyContent:"center" ,alignItems:"center"}} component="section" className="Loginpage">
  <Card sx={{width:400,p:2,borderRadius:4, boxShadow:6}}>

    <CardContent>
<Typography variant='h4' align='center' fontWeight="bold" color="primary"> 
Login 
    </Typography>
    
    {serverErrors?.length > 0? serverErrors.map((errors)=>
     <Typography color="error">{error}
    </Typography>
     ) :''}
    <Box onSubmit= { handleSubmit(LoginForm)} component= "form" sx ={{marginTop: 2 , display :"flex",flexDirection: "column", gap :2 }}>

      
      <TextField fullWidth {...register("email")}  label="Email" variant="outlined"
         />
{errors.email} <Typography color='error'> email is required</Typography>
       <TextField fullWidth {...register("password")}  label="password" variant="outlined"
       />
        {errors.password} <Typography color='error'> password is required</Typography>

       
        
        
  <button variant="contained" type="submit" disabled={isSubmitting}>
  {isSubmitting? <CircularProgress/>:'Login'}
</button>
      
    </Box>
    </CardContent>
  </Card>
    
   </Box>
  )
}
