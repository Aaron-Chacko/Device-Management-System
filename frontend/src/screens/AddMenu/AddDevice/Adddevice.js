import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import './Adddevice.css'; // Import your CSS file for styling

const AddDevice = () => {
  const [deviceName, setDeviceName] = useState('');
  const [routerSN, setRouterSN] = useState('');
  const [group, setGroup] = useState('');
  const [status, setStatus] = useState('');
  const [locationID, setLocationID] = useState('');
  const [versionID, setVersionID] = useState('');
  const [networkID, setNetworkID] = useState('');
  const [activityID, setActivityID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic for adding the device (you can use an API call here)
    alert('Device Added Successfully!');
  };

  return (
    <Box className="add-device-container">
      <Paper elevation={3} className="add-device-form">
        <Typography variant="h5" className="form-heading">
          Add New Device
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Device Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
          />
          <TextField
            label="Router SN"
            variant="outlined"
            fullWidth
            margin="normal"
            value={routerSN}
            onChange={(e) => setRouterSN(e.target.value)}
          />
          <TextField
            label="Group"
            variant="outlined"
            fullWidth
            margin="normal"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />
          <TextField
            label="Status"
            variant="outlined"
            fullWidth
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <TextField
            label="Location ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={locationID}
            onChange={(e) => setLocationID(e.target.value)}
          />
          <TextField
            label="Version ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={versionID}
            onChange={(e) => setVersionID(e.target.value)}
          />
          <TextField
            label="Network ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkID}
            onChange={(e) => setNetworkID(e.target.value)}
          />
          <TextField
            label="Activity ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={activityID}
            onChange={(e) => setActivityID(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Add Device
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddDevice;
