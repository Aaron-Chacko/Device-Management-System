// Profile.js
import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import "./profile.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "@mui/material/Button"; // Import Button from MUI

const Profile = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleMenuClick = () => {
        navigate("/dashboard"); // Navigate back to dashboard
    }
    
  return (
    <Box className="profile-container">

<Button
        onClick={handleMenuClick}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
          backgroundColor: "#FF6500",
          color: "white",
          fontWeight: "bold",
          fontFamily: "Orbitron, sans-serif",
          textTransform: "none", // Keeps it from going ALL CAPS
          "&:hover": {
            backgroundColor: "#FF4500",
          },
        }}
      >
        ← Dashboard
      </Button>

      <Typography
              variant="h4"
              className="dashboard-heading"
              sx={{
                fontFamily: "Audiowide, sans-serif",
                color: "#FF6500",
                fontSize: 38,
                fontWeight: "bold",
                textShadow: "0px 0px 5px rgba(255, 101, 0, 0.75)",
                marginBottom: 8,
              }}
            >
              About Us
            </Typography>

      <Paper elevation={3} className="profile-details">
        <Typography variant="h5" className="company-name">
          XYZ Corp
        </Typography>
        <Typography className="company-info">
          XYZ Corp is a leading tech company specializing in device management solutions. 
          We aim to provide seamless integration and real-time tracking of devices across organizations.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography><strong>Founded:</strong> 2010</Typography>
            <Typography><strong>Location:</strong> San Francisco, CA</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><strong>Website:</strong> www.xyzcorp.com</Typography>
            <Typography><strong>Contact:</strong> contact@xyzcorp.com</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
