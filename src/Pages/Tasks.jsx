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
    display: 'flex',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
  }}
>
  <Stack
    spacing={2}
    sx={{
      width: '95%',
      height: '95%',
      // boxShadow: '0px 8px 24px rgba(0,0,0,0.1)',
      borderRadius: '16px',
      padding: '20px',
      backgroundColor: 'transparent',
    }}
  >
    <Stack
      direction="row"
      spacing={3}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%',
        background: '#f9f9f9',
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <Pagination count={100} />
      <Button
        variant="contained"
        sx={{
          background: '#00796b',
          '&:hover': {
            background: '#004d40',
            color: 'white',
          },
          boxShadow: '0px 4px 12px rgba(0, 121, 107, 0.3)',
          borderRadius: '8px',
          textTransform: 'none',
        }}
      >
        Add Task
      </Button>
      <TextField
        placeholder="Search..."
        sx={{
          width: '28%',
          height: '80%',
          background: '#f0f0f0',
          borderRadius: '8px',
        }}
      />
      <FormControl
        sx={{
          width: '8%',
        }}
      >
        <InputLabel>Status</InputLabel>
        <Select value={age} label="status" onChange={handleStatusChange}>
          <MenuItem value={'completed'}>Completed</MenuItem>
          <MenuItem value={'inprogress'}>In Progress</MenuItem>
          <MenuItem value={'backlog'}>Backlog</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        sx={{
          background: '#00796b',
          '&:hover': {
            background: '#004d40',
            color: 'white',
          },
          boxShadow: '0px 4px 12px rgba(0, 121, 107, 0.3)',
          borderRadius: '8px',
          textTransform: 'none',
        }}
      >
        Start Date
      </Button>
      <Button
        variant="contained"
        sx={{
          background: '#00796b',
          '&:hover': {
            background: '#004d40',
            color: 'white',
          },
          boxShadow: '0px 4px 12px rgba(0, 121, 107, 0.3)',
          borderRadius: '8px',
          textTransform: 'none',
        }}
      >
        End Date
      </Button>
      <IconButton
        sx={{
          background: '#00796b',
          '&:hover': {
            background: '#004d40',
            color: 'white',
          },
          boxShadow: '0px 4px 12px rgba(0, 121, 107, 0.3)',
          color: 'white',
          borderRadius: '8px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>

    <Stack
      spacing={3}
      sx={{
        height: '80%',
        overflow: 'hidden',
        overflowY: 'scroll',
        padding: '10px',
        // backgroundColor: '#f5f5f5',
        borderRadius: '12px',
        // boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      {new Array(10).fill(0).map((key, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                boxShadow: '0px 8px 16px rgba(0,0,0,0.15)',
              },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Task {index + 1}
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Stack>
  </Stack>
</Box>

  )
}

export default Tasks
