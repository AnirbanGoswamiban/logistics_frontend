import { Stack, Typography } from '@mui/material'
import React from 'react'

const Description = () => {
  return (
    <>
    <Stack spacing={3}
    sx={{
        width:'100%',
        height:'100%',
    }}
    >
        <Stack>
        <Typography variant='h3' sx={{
            border:'1px solid black',
            padding:'5px'
        }}>
            TASK Id : AMP#KLMO4
        </Typography>
        </Stack>
        <Stack spacing={3} sx={{
            border:'1px solid black',
            padding:'5px'
        }}>
        <Typography variant='h4'>
            TASK NAME: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </Typography>
        <span style={{
            fontSize:'40px'
        }}>
           DESCRIPTION:
        </span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus fuga quam ea ab nemo repellendus voluptas hic amet et blanditiis, itaque cum aliquid necessitatibus, possimus magnam fugit a ex iure!

        </Stack>
    </Stack>
    </>
  )
}

export default Description
