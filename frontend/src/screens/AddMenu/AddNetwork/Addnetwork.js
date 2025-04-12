import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import './Addnetwork.css'; // Import your CSS file for styling

const AddNetwork = () => {
  const [networkName, setNetworkName] = useState('');
  const [networkType, setNetworkType] = useState('');
  const [networkStatus, setNetworkStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic for adding the network (you can use an API call here)
    alert('Network Added Successfully!');
  };

  return (
    <Box className="add-network-container">
      <Paper elevation={3} className="add-network-form">
        <Typography variant="h5" className="form-heading">
          Add New Network
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Network Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkName}
            onChange={(e) => setNetworkName(e.target.value)}
          />
          <TextField
            label="Network Type"
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkType}
            onChange={(e) => setNetworkType(e.target.value)}
          />
          <TextField
            label="Network Status"
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkStatus}
            onChange={(e) => setNetworkStatus(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Add Network
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddNetwork;
