import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';
import axios from 'axios';
export default function Register() {
  const {register,handleSubmit} = useForm();
  const RegisterFrom = async(data)=>{
try{
const response =await axios.post( '${import.meta.evn.VITE_BURL }/auth/Account/Register',data);
console.log(response);
}catch(Error){
  console.log(Error);
}
  }
  return (

   <Box component="section" className="registerpage">
    <Typography component ="h1"variant ="h2"> 
Register
    </Typography>
    <Box component="form" sx ={{marginTop: 2 , display :"flex",flexDirection: "column", gap :2 }}>
      
      <TextField fullWidth {...register("userName")} label="userName" variant="outlined" />
       <TextField fullWidth {...register("password")}  label="password" variant="outlined" />
        <TextField fullWidth {...register("fullName")}  label="fullName" variant="outlined" />
        <TextField fullWidth {...register("email")}  label="email" variant="outlined" />
         <TextField fullWidth {...register("phoneNumber")}  label="phoneNumber" variant="outlined" />
          
  <button variant="contained" type="submit">
  Register
</button>
      
    </Box>
   </Box>
  )
}
