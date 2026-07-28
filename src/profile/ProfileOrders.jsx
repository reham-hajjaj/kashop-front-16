import React from 'react'
import useProfile from '../hooks/useProfie';
import { Box, Typography } from '@mui/material';

function ProfileOrders() {
      const {data, isLoading,isError,error} = useProfile();
     if(isLoading)return<CircularProgress/>;
     console.log(data);
  return (
    <Box>
      

    </Box>
  )
}

export default ProfileOrders
