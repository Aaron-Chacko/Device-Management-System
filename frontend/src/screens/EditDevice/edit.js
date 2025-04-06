import React, { useState } from 'react';
import './edit.css';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

const Edit = () => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ deviceName, deviceType, serialNumber });
    setDeviceName('');
    setDeviceType('');
    setSerialNumber('');
  };

  return (
    <Box className="edit-container">
      <Paper elevation={4} className="edit-paper">
        <Typography variant="h4" className="edit-heading">
          Add / Edit Device
        </Typography>
        <form className="edit-form" onSubmit={handleSubmit}>
          <TextField
            label="Device Name"
            variant="outlined"
            fullWidth
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
          />
          <TextField
            label="Device Type"
            variant="outlined"
            fullWidth
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
          />
          <TextField
            label="Serial Number"
            variant="outlined"
            fullWidth
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />
          <Button variant="contained" type="submit" className="edit-button">
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Edit;
