import { Box, Button, Typography } from '@mui/material'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import React from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Account = () => {
  return (
    <>
    <Box
    sx={{
      height:'100vh',
      width:'100%',
      // background:'red',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    }}
    >
    <Paper sx={{
      height:'80%',
      width:'80%'
    }} elevation={2}>
   <Stack direction="row"
   sx={{
      height:'100%',
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      // background:"pink"
   }}
   >
    <Box
    sx={{
      height:'100%',
      width:'50%',
      // background:'yellow'
      display:'flex',
     alignItems:"center",
     justifyContent:'center'
    }}
    >
      <Stack sx={{
              height:'100%',
              width:'100%',
              rowGap:"5%",
              alignItems:'center',
              justifyContent:'flex-start'
      }}><Typography variant='h4'>Details</Typography>
        <TextField sx={{width:'90%'}} variant="outlined" disabled='true' value='Name :'/>
        <TextField sx={{width:'90%'}} variant="outlined" disabled='true' value='Email :'/>
        <TextField sx={{width:'90%'}} variant="outlined" disabled='true' value='Number :'/>
        <TextField sx={{width:'90%'}} variant="outlined" disabled='true' value='Password :'/>
        <Button variant='contained' sx={{width:'20%',background:'#d84e55','&:hover': {
                  background: "#4ED8D1",
                  color:"#d84e55"
               }}}>Edit</Button>
      </Stack>
    </Box>
    <Divider orientation='vertical' flexItem />
    <Box
    sx={{
      height:'100%',
      width:'50%',
      display:'flex',
      alignItems:"center",
      justifyContent:'center'
      // background:'yellow'
    }}
    >
            <Stack sx={{
              height:'100%',
              width:'100%',
              rowGap:"5%",
              alignItems:'center',
              justifyContent:'flex-start'
      }}> 
    <Typography gutterBottom variant="h4" component="div">
    Profile
  </Typography>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="175"
          image="https://yt3.ggpht.com/zY1capI0gokYgkSVi57s3bABzoDJMXVPBfneuWvrOXwCghvu7wZeS_rr7n5JUFpNT5Ny1ZRKb1o=s88-c-k-c0x00ffffff-no-rj"
          alt="Profile pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
    <Button variant='contained' sx={{width:'20%',background:'#d84e55','&:hover': {
                  background: "#4ED8D1",
                  color:"#d84e55"
               }}}>Change</Button>
    </Stack>
    </Box>
   </Stack>
    </Paper>
    </Box>
    </>
  )
}

export default Account
