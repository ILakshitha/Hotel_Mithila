import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../assets/IEEE.png'; // Assuming you have the logo image

export default function Footer() {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: '#f9f9f9',
      borderTop: '1px solid #e0e0e0',
      padding: '20px 0',
    }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{ padding: '0 50px' }}>
        
        {/* Left section - Logo */}
        <Grid item>
          <Box display="flex" alignItems="center">
            <img src={Logo} alt="Logo" style={{ height: '60px', marginRight: '10px' }} />
            
          </Box>
        </Grid>

        {/*section - Social Media Icons */}
        <Grid item>
          <Box display="flex" gap={2}>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom section - Copyright */}
      <Box textAlign="center" mt={2}>
        
      </Box>
    </Box>
  );
}
