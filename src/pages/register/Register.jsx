import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Card, CardContent, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { data } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Construction, Password } from '@mui/icons-material';
import axiosInstance from '../../api/axiosInstance';


export default function Register(){

 
  const [serverErrors,setServerErrors] =useState([]);
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm();
  const RegisterForm = async(data)=>{
try{
const response = await axiosInstance.post("/auth/Account/Register" ,data);
console.log(response);
}catch(err){
  setServerErrors(err.response.data.errors)
  console.log(err.response.data.errors);
}
  }
  return (

   <Box  sx={{ minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center", background:"linear-gradient(135deg,#1976d2,#4,2a5f5"}}component="section" className="registerpage">
    <Container maxWidth="sm">
      <Card sx={{borderRadius:4,p:2,boxShadow:8}}>
        <CardContent>
          <Typography component ="h4"variant ="h4" align='center' fontWeight="bold" color="primary" mb={4}> 
Register
    </Typography>
    
    {serverErrors?.length > 0? serverErrors.map((error)=>
     <Typography color="error">{error}
    </Typography>
     ) :''}
    <Box onSubmit= { handleSubmit(RegisterForm)}component="form" sx ={{marginTop: 2 , display :"flex",flexDirection: "column", gap :2 }}>
      <Grid size={{xs:12,md:6}}>
<TextField fullWidth {...register("UserName",{required:true,minLength:5})} label="userName " variant="outlined"
      />
     {errors.userName} <Typography color='error'>userName is required</Typography>
      </Grid>
     <Grid size={12}>
 <TextField fullWidth {...register("Password",{required:true,min:10})}  label="password" variant="outlined"
       />
        {errors.password} <Typography color='error'> password is required</Typography>
     </Grid>
      

        <TextField fullWidth {...register("fullName",{required:true,min:20})}  label="fullName" variant="outlined"
        />
        {errors.fullName} <Typography color='error'>fullName is required</Typography>
        <Grid size={12}>
 <TextField fullWidth {...register("Email",{required:true})}  label="email" variant="outlined"
         />
{errors.email} <Typography color='error'> email is required</Typography>
        </Grid>
       <Grid size={12}>
 <TextField fullWidth {...register("PhoneNumber",{required:true})}  label="phoneNumber" variant="outlined"
         />
            {errors.phoneNumber} <Typography align="center" sx={{mt:2}}  color='error'> phoneNumber is required</Typography>
       </Grid>
        
  <button sx={{mt:3, py:1.5,borderRadius:2 ,fontSize:18}} variant="contained fullWidth" type="submit" disabled={isSubmitting}>
  {isSubmitting? <CircularProgress/>:'register'}
</button>
      
    </Box>
        </CardContent>
      </Card>
    </Container>
    
   </Box>
  )
}
