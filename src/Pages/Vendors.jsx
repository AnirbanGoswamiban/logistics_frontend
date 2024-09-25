import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Vendors = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        // padding: "20px",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          height: "5%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        {/* First Box with Text */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            VENDORS
          </Typography>
        </Box>

        {/* Second Box with Button */}
        <Box
        sx={{
          width:'12%',
          display:'flex',
          justifyContent:'start',
        }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#d84e55",
              "&:hover": {
                backgroundColor: "#4ED8D1",
                color: "#fff",
              },
            }}
          >
            Add Vendor
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '8%',  // 8% of the parent height
          display: 'flex',
          justifyContent: 'space-between',  // Space between the boxes
          alignItems: 'center',  // Aligns items vertically in the center
          padding: '0 16px',  // Padding inside the box
          // backgroundColor: '#f0f0f0', // Optional background for visibility
        }}
      >
        {/* Three boxes */}
        <Box sx={{ width: '30%', height: '100%',}}>Avatar</Box>
        <Box sx={{ width: '30%', height: '100%',}}>Name</Box>
        <Box sx={{ width: '30%', height: '100%',}}>Status</Box>
        <Box sx={{ width: '30%', height: '100%',}}>Delete</Box>

      </Box>
      <Box
      sx={{
        width: '97%',
        height: '80%',  // vh is used to make it relative to viewport height
        display: 'flex',
        flexDirection: 'column',  // Ensures items stack vertically
        rowGap: '10%',
        overflowY: 'scroll',
        padding:'20px'
      }}
    >
      {new Array(5).fill(0).map((item)=>{
        return (
          <Box
          sx={{
            width: '100%',
            height: '8%',  // 8% of the parent height
            display: 'flex',
            justifyContent: 'space-between',  // Space between the boxes
            alignItems: 'center',  // Aligns items vertically in the center
            padding: '0 16px',  // Padding inside the box
            backgroundColor: '#fff', // Optional background for visibility
          }}
        >
          {/* Three boxes */}
          <Box sx={{ width: '30%', height: '100%', backgroundColor: '#ccc' }} />
          <Box sx={{ width: '30%', height: '100%', backgroundColor: '#ccc' }} />
          <Box sx={{ width: '30%', height: '100%', backgroundColor: '#ccc' }} />
  
          {/* Delete icon */}
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
        )
      })}
    </Box>
    </Box>
  );
};

export default Vendors;
