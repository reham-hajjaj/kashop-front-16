
import React, { useEffect, useState } from 'react'
import useProfile from '../hooks/useProfie';
import { Box, Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import useUpdateProfile from '../hooks/useUpdateProfile';
import useUpdateEmail from '../hooks/useUpdateEmail';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
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
    <Grid item xs={12} md={7} >
      <Card  sx={{width: "100%", maxWidth: 650,mx: "auto",  mt: { xs: 3, md: 6 },borderRadius: 4,boxShadow: "0 8px 30px rgba(0,0,0,0.08)",  bgcolor: "#FFFFFF",overflow: "hidden",  }}>
        <Box sx={{ width: 100,  height: 100,borderRadius: "50%", bgcolor: "#E8F5E9", display: "flex",  alignItems: "center",justifyContent: "center",  mx: "auto",mb: 2, }} >
          <PersonIcon sx={{fontSize: 55,color: "#2E7D32", }}/>
        </Box>
          <Box sx={{bgcolor: "#F3F8F4",textAlign: "center",py: 4, px: 2, }} >   <Typography variant='h4' sx={{fontWeight: "bold", color: "#1B1B1B",  mb: 1,}}>My Profile</Typography>
        
         
<Typography variant='h6' align='center'sx={{color: "#2E7D32",fontWeight: 600, }} >{data?.fullName}</Typography>
          </Box>
          <CardContent sx={{p: { xs: 3, md: 4 } }}>
<TextField  sx={{mb:2.5}} fullWidth label="Phone Number" value={data?.phoneNumber} >

</TextField>
      <TextField sx={{mb:2.5}} fullWidth label="Email"value={email} onChange={(e)=>setEmail(e.target.value)}>

</TextField>

         <TextField sx={{mb:3}} fullWidth label="City"value={data.city} >

</TextField>
<Button fullWidth  variant='contained' onClick={handleSubmit} disabled={isPending}sx={{  py: 1.4,bgcolor: "#2E7D32", borderRadius: 2.5,fontWeight: "bold",fontSize: "1rem",textTransform: "none",boxShadow: "none","&:hover": { bgcolor: "#256628",  boxShadow: "0 5px 15px rgba(46,125,50,0.25)",}, }} >Save Changes</Button>

      
          
        </CardContent>
      </Card>  
    </Grid>
    
  
    
  );
}


