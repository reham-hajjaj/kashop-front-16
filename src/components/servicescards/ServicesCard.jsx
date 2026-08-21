import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'

function ServicesCard({title, description,icon}) {
  return (
    
    <Card elevation={0} sx={{width:"100%",maxWidth:"300px",minHeight: "190px", p: 2.5,mx: "auto", borderRadius: 3, textAlign: "center",border:"1px solid #eeeeee",backgroundColor: "#fff",transition: "0.3s", "&:hover": {transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.08)",}, }}>
<CardContent sx={{textAlign:"center"}}>
    <Typography sx={{width: 55,height: 55, borderRadius: "50%", backgroundColor: "#fff3ee",color: "#f4511e", display: "flex",alignItems:"center",justifyContent: "center",mb: 1.5,"& svg": {fontSize: 28, },}}>{icon}</Typography>
     <Typography variant="subtitle1" sx={{fontWeight:700,color:"#222", mb: 0.5, }}>{title}</Typography>
      <Typography variant="body2"sx={{color:"#777",lineHeight: 1.5,fontSize: "0.85rem",}}>{description}</Typography>
</CardContent>
      
    </Card>
  )
}

export default ServicesCard;
