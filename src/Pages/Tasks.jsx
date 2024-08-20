import React from 'react'
import { Box, Button, Paper, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Tasks = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

        const [age, setAge] = React.useState('');
      
        const handleStatusChange = (event) => {
          setAge(event.target.value);
        };
  return (
<Box
sx={{
    display:'flex',
    width:'100%',
    height:'100vh',
    alignItems:'center',
    justifyContent:'center',
    // background:'red'
}}
>
<Stack spacing={2}
sx={{
    width:'99%',
    height:'98%',
    // background:'yellow'
}}
>
    <Stack direction='row' spacing={5} sx={{
        // background:'yellow',
        justifyContent:'center',
        alignItems:'center',
        height:'10%',
        // background:'yellow'
    }}>
    <Pagination count={100} />
    <Button variant='contained' sx={{
            background:'#d84e55','&:hover': {
                background: "#4ED8D1",
                color:"#d84e55"
             }
        }}>
            Add Task
        </Button>
        <TextField sx={{width:'28%',height:'80%'}}/>
        {/* <Button variant='contained' sx={{
            background:'#d84e55','&:hover': {
                background: "#4ED8D1",
                color:"#d84e55"
             }
        }}>
            Status
        </Button> */}
        <FormControl
        sx={{
            width:'8%',
        }}
        >
        <InputLabel>Age</InputLabel>
        <Select
          value={age}
          label="Age"
          onChange={handleStatusChange}
        >
          <MenuItem value={'completed'}>Completed</MenuItem>
          <MenuItem value={'inprogress'}>In Progress</MenuItem>
          <MenuItem value={'backlog'}>Backlog</MenuItem>
        </Select>
      </FormControl>
        <Button variant='contained'sx={{
            background:'#d84e55','&:hover': {
                background: "#4ED8D1",
                color:"#d84e55"
             }
        }}>start Date</Button>
        <Button variant='contained'sx={{
            background:'#d84e55','&:hover': {
                background: "#4ED8D1",
                color:"#d84e55"
             }
        }}>end Date</Button>
            <IconButton sx={{
            background:'#d84e55','&:hover': {
                background: "#4ED8D1",
                color:"#d84e55"
             }
        }}>
        <SearchIcon></SearchIcon>
            </IconButton>
    </Stack>
    <Stack spacing={1} sx={{
        height:"80%",
        overflow:'hidden',
        overflowY:'scroll'
    }}>
      {
        [1,2,3,4,7,6,7,8,9,10].map((key,index)=>{
            return(
                <Accordion
                key={index}
                 expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}sx={{
                    border:'1px solid black',
                }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      {key}
                    </AccordionSummary>
                    <AccordionDetails>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                  </Accordion> 
            )
        })
      }
    </Stack>
</Stack>
</Box>
  )
}

export default Tasks
