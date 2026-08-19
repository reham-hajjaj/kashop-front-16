import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'

function Services({title, description,icon}) {
  return (
    <Card sx={{ background:"#fff4e6",minHeight:'120',textAlign:"center",borderRadius:3,boxShadow:3}}>
      <CardContent>
 <Typography variant='h4'>{icon}</Typography>
       <Typography variant='h4'>{title}</Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
     
    </Card>
  );
}
 

export default Services;
