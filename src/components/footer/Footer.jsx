import { Alert, Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubscribe = () => {
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Subscribed successfully!");
    setEmail("");
  };

  return (
    <Box component="footer" sx={{ backgroundColor: "#0B0F14", color: "#fff", mt: 8, pt: 7, pb: 3, }} >
      <Container maxWidth="lg" >
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }} >
            <Typography variant="h5" fontWeight="bold" sx={{ color: "primary.main", mb: 2, letterSpacing: 1, }}  >
              KASHOP
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, maxWidth: 300, }} >
              Your trusted online store for quality products, great prices,
              and a simple shopping experience.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton sx={{
                border: "1px solid",
                borderColor: "divider", color: "text.primary", "&:hover": { color: "primary.main", borderColor: "primary.main", },
              }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{
                border: "1px solid",
                borderColor: "divider", color: "text.primary", "&:hover": { color: "primary.main", borderColor: "primary.main", },
              }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ border: "1px solid", borderColor: "divider", color: "text.primary", "&:hover": { color: "primary.main", borderColor: "primary.main", }, }}>
                <WhatsAppIcon />
              </IconButton>
            </Stack>
          </Grid>



          <Grid  size={{ xs: 12, md: 4}} >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }} >Contact Us </Typography>
            <Stack spacing={2} >
              <Box sx={{display: "flex",alignItems: "center",gap: 1.5, }}>
                <EmailIcon sx={{ color: "primary.main", display: "flex",}}  />
                <Typography variant="body2" color="text.secondary"> support@kashop.com </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, }}
              >
                <LocalPhoneIcon sx={{ color: "primary.main" }} />

                <Typography variant="body2" color="text.secondary">
                  +970 599 030553
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, }}>
                < AddLocationIcon sx={{ color: "primary.main" }} />
                <Typography variant="body2" color="text.secondary">Palestine</Typography>
              </Box>

            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>Stay Update</Typography>

            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3, maxWidth: 330, }} >
              Subscribe to KASHOP and get the latest products,
              special offers, and updates directly in your inbox </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }} spacing={1} >
              <TextField fullWidth size="small" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value); setMessage(""); }} sx={{ "& .MuiOutlinedInput-root": { color: "#fff", backgroundColor: "#121923", borderRadius: 2, "& fieldset": { borderColor: "#303944", }, "&:hover fieldset": { borderColor: "primary.main", }, "&.Mui-focused fieldset": { borderColor: "primary.main", }, }, "& input::placeholder": { color: "#9ca3af", opacity: 1 }, }}/>

              <Button
                variant="contained"onClick={handleSubscribe}  sx={{minWidth: 140,borderRadius: 2,     fontWeight: "bold", whiteSpace: "nowrap",}}>Subscribe Now
              </Button>
            </Stack>
            {message && (
              <Alert severity={ message === "Subscribed successfully!" ? "success"  : "warning"}
    sx={{ mt: 2, py: 0,backgroundColor: "#121923",color: "#fff",}}>{message}</Alert> )}
          </Grid>

        </Grid>
        <Box sx={{ py: 3, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, flexDirection: { xs: "column", sm: "row", }, textAlign: { xs: "center", sm: "left" }, }}
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