import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';
import Button from '@mui/material/Button';

import axios from 'axios';
import { Construction, Password } from '@mui/icons-material';


export default function Register(){

 
  const [serverErrors,setServerErrors] =useState([]);
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm();
  const RegisterForm = async(data)=>{
try{
const response = await axios.post( '${import.meta.evn.VITE_BURL }/auth/Account/Register',data);
console.log(response);
}catch(err){
  setServerErrors(err.response.data.errors)
  console.log(err.response.data.errors);
}
  }
  return (

   <Box component="section" className="registerpage">
    <Typography component ="h1"variant ="h2"> 
Register
    </Typography>
    
    {serverErrors?.length > 0? serverErrors.map((errors)=>
     <Typography color="error">{error}
    </Typography>
     ) :''}
    <Box onSubmit= { handleSubmit,(RegisterForm)}component="form" sx ={{marginTop: 2 , display :"flex",flexDirection: "column", gap :2 }}>
      
      <TextField fullWidth {...register("userName,{requird:true.min:3}")} label="userName " variant="outlined"
      />
     {errors.userName} <Typography color='error'>userName is required</Typography>
       <TextField fullWidth {...register("password,{requird:true.min:8}")}  label="password" variant="outlined"
       />
        {errors.password} <Typography color='error'> password is required</Typography>

        <TextField fullWidth {...register("fullName,{requird:true.min:20}")}  label="fullName" variant="outlined"
        />
        {errors.fullName} <Typography color='error'>fullName is required</Typography>
        <TextField fullWidth {...register("email,{requird:true}")}  label="email" variant="outlined"
         />
{errors.email} <Typography color='error'> email is required</Typography>
         <TextField fullWidth {...register("phoneNumber,{requird:true}")}  label="phoneNumber" variant="outlined"
         />
            {errors.phoneNumber} <Typography color='error'> phoneNumber is required</Typography>
  <button variant="contained" type="submit" disabled={isSubmitting}>
  {isSubmitting? <CircularProgress/>:'register'}
</button>
      
    </Box>
   </Box>
  )
}
