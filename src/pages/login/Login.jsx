import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';
import Button from '@mui/material/Button';


import axios from 'axios';
import { Construction, Password } from '@mui/icons-material';


export default function Login(){  

 
  const [serverErrors,setServerErrors] =useState([]);
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm();

  const LoginForm = async(data)=>{
try{
const response = await axios.post( `${import.meta.env.VITE_BURL }/Login`,data);
setToken(response.data.accessToken);
console.log(response);
navigate('/')
}catch(err){
  setServerErrors(err.response.data.errors)
  console.log(err.response.data.errors);
}
  }
  return (

   <Box component="section" className="Loginpage">
    <Typography component ="h1"variant ="h2"> 
Login 
    </Typography>
    
    {serverErrors?.length > 0? serverErrors.map((errors)=>
     <Typography color="error">{error}
    </Typography>
     ) :''}
    <Box onSubmit= { handleSubmit(LoginForm)} component= "form" sx ={{marginTop: 2 , display :"flex",flexDirection: "column", gap :2 }}>
      
      <TextField fullWidth {...register("Email")}  label="email" variant="outlined"
         />
{errors.email} <Typography color='error'> email is required</Typography>
       <TextField fullWidth {...register("Password")}  label="password" variant="outlined"
       />
        {errors.password} <Typography color='error'> password is required</Typography>

       
        
        
  <button variant="contained" type="submit" disabled={isSubmitting}>
  {isSubmitting? <CircularProgress/>:'Login'}
</button>
      
    </Box>
   </Box>
  )
}
