import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import './Addversion.css';

const AddVersion = () => {
  const [versionName, setVersionName] = useState('');
  const [versionNumber, setVersionNumber] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic for adding the version (you can use an API call here)
    alert('Version Added Successfully!');
  };

  return (
    <Box className="add-version-container">
      <Paper elevation={3} className="add-version-form">
        <Typography variant="h5" className="form-heading">
          Add New Version
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Version Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={versionName}
            onChange={(e) => setVersionName(e.target.value)}
          />
          <TextField
            label="Version Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={versionNumber}
            onChange={(e) => setVersionNumber(e.target.value)}
          />
          <TextField
            label="Release Date"
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="submit-button"
          >
            Add Version
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddVersion;
