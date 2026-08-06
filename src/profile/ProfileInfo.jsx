
import React, { useEffect, useState } from 'react'
import useProfile from '../hooks/useProfie';
import { Box, Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';


import useUpdateProfile from '../hooks/useUpdateProfile';

import useUpdateEmail from '../hooks/useUpdateEmail';
export default function ProfileInfo() {
     const {data, isLoading, isError,error} =  useProfile();
     const{mutate:updateProfile}=useUpdateProfile();
     const[email,setEmail]=useState("");
     useEffect(()=>{if(data?.email)setEmail(data.email)}, [data]);
      const{mutate:updateEmail,isPending} = useUpdateEmail();
      const handleSubmit=()=>{updateEmail({newEmail:email});};
      
    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography color="error">{error?.message}</Typography>
    
   console.log(data);
  return (
    <Grid item xs={12} md={5} >
      <Card sx={{ maxWidth:500, mt:8,borderRadius:4, boxShadow:4, bgcolor:"#F3F8F4",p:2}}>
        <CardContent>
          <Box sx={{display:"flex", flexDirection:"column",alignItems:"center"}}>
        
          </Box>
          <Typography variant='h4' align='center'sx={{fontWeight:"bold",mb:1}}>My Profile</Typography>
        
         
<Typography variant='h6' align='center' sx={{mb:4}}>{data?.fullName}</Typography>
<TextField sx={{mb:2}} fullWidth label="Phon Number" value={data?.phoneNumber} >

</TextField>
      <TextField sx={{mb:2}} fullWidth label="Email"value={email} onChange={(e)=>setEmail(e.target.value)}>

</TextField>

         <TextField sx={{mb:3}} fullWidth label="City"value={data.city} >

</TextField>
<Button fullWidth  variant='contained' onClick={handleSubmit} disabled={isPending} sx={{bgcolor:"#2E7D32",borderRadius:2}}>Save Changes</Button>

      
          
        </CardContent>
      </Card>  
    </Grid>
    
  
    
  );
}


