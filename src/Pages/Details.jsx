import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicTabs from '../Components/Tabs'

const Details = () => {
  return (
    <Box sx={{
        width:'100%',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    }}>
        <Stack sx={{
            width:"98%",
            height:'95%',
        }}>
          <BasicTabs/>
        </Stack>
    </Box>
  )
}

export default Details
