import { Button, Card, TextField } from '@mui/material';
import React from 'react'
import useChangePassword from '../hooks/useChangePassword';

function ChangePassword() {
    const{mutate:changePassword,isPending}=useChangePassword();
    const[currentpassword,setCurrentPassword]=useState("");
          const[newPassword,setNewPassword]=useState("");
          const[confirmNewPassword,setconfirmNewPassword]=useState("");
         
  return (
    <Grid item xs={12} md={5}>
        <Card  sx={{ maxWidth:500, mt:8,borderRadius:4, boxShadow:4, bgcolor:"#F3F8F4",p:2}}>
            <CardContent>
 <Box>
      <TextField label="Current Password" type='Password'  fullWidth></TextField>
            <TextField label="New Password" type='Password'  fullWidth></TextField>
                  <TextField label="Confirm New Password" type='Password'  fullWidth></TextField>
                  <Button fullWidth  variant='containd'>Sav Change</Button>
    </Box>

       </CardContent>
       </Card> 
    </Grid>
   
  )
}

export default ChangePassword
