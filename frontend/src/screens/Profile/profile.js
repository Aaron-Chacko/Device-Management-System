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
  };

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
        <Typography
          variant="h5"
          className="company-name"
          sx={{
            fontFamily: "Audiowide, sans-serif",
            color: "#FF6500",
            fontSize: 30,
            fontWeight: "bold",
            textShadow: "0px 0px 5px rgba(255, 101, 0, 0.75)",
            marginBottom: 3,
          }}
        >
          Tenet Networks Private Limited
        </Typography>

        <Typography className="company-info">
          A Technology Company Specializing in Connectivity and Automation
          Solutions. <br />
          We thrive at the intersection of Advisory, Consulting, Design,
          Engineering, and Products to solve our customer's challenges by
          Demystifying the Technology and Product Deluge.
          <br /> <br />
          We are a team of industry experts, who among them have a combined
          experience of over 150 years. <br />
          Our love for technology and new challenges have provided us with
          opportunities to work on many facets of the technology starting from
          hardware/software systems design and development; performance
          measurements and quantification; end-to-end network design and
          engineering; to deployment, integration and operating networks. <br />
          Our ultimate goal is to create value for our customers, by helping
          them choose the right and best in class solutions for their
          connectivity and automation challenges through a comprehensive set of
          solutions using a combination of our in-house products and partner
          products.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>
              <strong>Founded:</strong> 2018
            </Typography>
            <Typography>
              <strong>Location:</strong>
            </Typography>
            <Typography sx={{ pl: 2 }}>
              #541, 5th Floor, Tower A, Logix Technova, Sector 132, NOIDA -
              201305
              <br />
              UP, INDIA
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              <strong>Website:</strong> tenetnetworks.com
            </Typography>
            <Typography>
              <strong>Contact:</strong> hello@tenetnetworks.com | +91 120
              4165905
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
