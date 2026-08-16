import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

function ServicesCard({title, description,icon}) {
  return (
    
    <Card>
<CardContent sx={{textAlign:"center"}}>
    <Typography variant='h4'>{icon}</Typography>
     <Typography variant='h6'>{title}</Typography>
      <Typography variant='body2'>{description}</Typography>
</CardContent>
      
    </Card>
  )
}

export default ServicesCard;
