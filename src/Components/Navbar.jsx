import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" 
      sx={{
        background:'#d84e55'
      }}>
        <Toolbar>
            <Typography
            sx={{
              fontWeight:"bold",
              fontSize:"2.5rem",
              flexGrow:1
            }}>
                LOGISTICS
            </Typography>
            <Box>
              <Button
              sx={{
                fontSize:"1.2rem",
                fontWeight:"bold",
                color:"#fff",
                '&:hover': {
                  background: "#4ED8D1",
                  color:"#d84e55"
               }
              }}
              >Dashboard</Button>
                            <Button
              sx={{
                fontSize:"1rem",
                fontWeight:"bold",
                color:"#fff",
                '&:hover': {
                  background: "#4ED8D1",
                  color:"#d84e55"
               }
              }}
              >Tasks</Button>
                <IconButton
                sx={{
                  fontSize:"1rem",
                  fontWeight:"bold",
                  color:"#fff",
                  '&:hover': {
                    background: "#4ED8D1",
                    color:"#d84e55"
                 }
                }}
                >
                {/* <Button
              sx={{
                fontSize:"1rem",
                fontWeight:"bold",
                color:"#fff",
                '&:hover': {
                  background: "#4ED8D1",
                  color:"#d84e55"
               }
              }}
              >Add Employee</Button> */}
                  <AccountCircleIcon/>
                </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
