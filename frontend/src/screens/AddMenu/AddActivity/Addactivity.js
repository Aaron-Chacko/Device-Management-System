import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import './AddActivity.css';

const AddActivity = () => {
  const [createTime, setCreateTime] = useState('');
  const [loginTime, setLoginTime] = useState('');
  const [lastConnect, setLastConnect] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API call
    alert('Activity Added Successfully!');
  };

  return (
    <Box className="add-activity-container">
      <Paper elevation={3} className="add-activity-form">
        <Typography variant="h5" className="form-heading">
          Add New Activity
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Create Time"
            variant="outlined"
            fullWidth
            margin="normal"
            value={createTime}
            onChange={(e) => setCreateTime(e.target.value)}
          />
          <TextField
            label="Login Time"
            variant="outlined"
            fullWidth
            margin="normal"
            value={loginTime}
            onChange={(e) => setLoginTime(e.target.value)}
          />
          <TextField
            label="Last Connect"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastConnect}
            onChange={(e) => setLastConnect(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Add Activity
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddActivity;
