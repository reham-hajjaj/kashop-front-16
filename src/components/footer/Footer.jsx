import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Footer() {
  return (
    <Box component="footer" sx={{backgroundColor: "#0B0F14", color: "#fff",mt: 8,pt: 6, gap:4, pb: 3,}} >
<Container maxWidth="lg" >
<Grid container spacing={4} sx={{ width:"100%" }}>
<Grid  item xs={12} sm={6} md={3}>
<Typography variant="h5" fontWeight="bold"sx={{color: "primary.main",mb: 2,letterSpacing: 1,  }} >
KASHOP
</Typography>
<Typography variant="body2"color="text.secondary"sx={{lineHeight: 1.9,maxWidth: 280,}} >
  Your trusted online store for quality products, great prices,
              and a simple shopping experience.
</Typography>
<Stack direction="row" spacing={1} sx={{ mt: 3 }}>
  <IconButton sx={{
                  border: "1px solid",
                  borderColor: "divider",  color: "text.primary",  "&:hover": {color: "primary.main",   borderColor: "primary.main",},  }}>
  <FacebookIcon/>
</IconButton>
<IconButton sx={{
                  border: "1px solid",
                  borderColor: "divider",  color: "text.primary",  "&:hover": {color: "primary.main",   borderColor: "primary.main",},  }}>
  <InstagramIcon/>
</IconButton>
<IconButton sx={{ border: "1px solid",  borderColor: "divider",  color: "text.primary",  "&:hover": {color: "primary.main",   borderColor: "primary.main",},  }}>
  <WhatsAppIcon/>
</IconButton>
  </Stack> 
</Grid>
<Grid  item xs={12} sm={6} md={3}>
  <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
              }}
            >
              Newsletter
            </Typography>

            <Typography variant="body2"sx={{color: "#B0B0B0", mb: 2, }}>
              Subscribe to our newsletter to receive the latest updates.
            </Typography>

            <TextField fullWidth placeholder="Enter your email"   size="small" sx={{mb: 2,"& .MuiOutlinedInput-root": {
                  color: "#fff",
                  "& fieldset": {
                    borderColor: "#555",},"&:hover fieldset": {borderColor: "#FF9800",},},"& input::placeholder": {color: "#aaa",opacity: 1, },}}/>
                    <Button fullWidth variant="contained" sx={{backgroundColor: "#FF9800",color: "#000",fontWeight: "bold", "&:hover": {backgroundColor: "#F57C00",},}}>  Subscribe Now </Button>
</Grid>


 <Grid  size={{ xs: 12, sm: 6, md: 3 }} >
<Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>Contact Us </Typography>
<Stack spacing={2} >
<Box sx={{ display: "flex", alignItems: "center",gap: 1.5  }}>
                <EmailIcon sx={{ color: "primary.main" }} />
                <Typography variant="body2" color="text.secondary"> support@kashop.com </Typography>
              </Box>
              <Box sx={{display: "flex",alignItems: "center",gap: 1.5, }}
              >
                <LocalPhoneIcon sx={{ color: "primary.main" }} />

                <Typography variant="body2" color="text.secondary">
                  +970 599 030553
                </Typography>
              </Box>
<Box sx={{display: "flex",alignItems: "center",gap: 1.5,}}>
< AddLocationIcon  sx={{ color: "primary.main" }} />
<Typography variant="body2" color="text.secondary">Palestine</Typography>
</Box>

</Stack>
  </Grid>
</Grid>
<Box sx={{py: 3,display: "flex", justifyContent: "space-between", alignItems: "center",gap: 2,flexDirection: { xs: "column",sm: "row",},textAlign: {xs: "center", sm: "left"},}}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 KASHOP. All rights reserved.
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Designed with  for a better shopping experience
          </Typography>
        </Box>
</Container>
    </Box>
  )
}