import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import "./assign.css";
import { useNavigate } from "react-router-dom";

const AssignDevice = () => {
  const [deviceID, setDeviceID] = useState("");
  const [location, setLocation] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic for adding the version (you can use an API call here)
    alert("Device Assigned Successfully!");
  };

  const handleMenuClick = () => {
    navigate("/dashboard"); // Navigate back to the menu
  };

  return (
    <Box className="assign-container">
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
          textTransform: "none", // this keeps it from going ALL CAPS
          "&:hover": {
            backgroundColor: "#FF4500",
          },
        }}
      >
        ← Dashboard
      </Button>
      <Paper elevation={3} className="assign-form">
        <Typography
          variant="h5"
          className="form-heading"
          sx={{
            fontFamily: "Audiowide, sans-serif",
            color: "#FF6500",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "32px",
            letterSpacing: "2px",
            textShadow: "0px 0px 6px rgba(255, 101, 0, 0.75)",
            marginBottom: 4,
            animation: "pulse 2s infinite",
          }}
        >
          Assign Device
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Device ID" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={deviceID} // change
            onChange={(e) => setDeviceID(e.target.value)} // change
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#FF6500" },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF6500",
                  boxShadow: "0 0 6px 2px rgba(255, 101, 0, 0.4)",
                },
              },
            }}
          />

          <TextField
            label="Location" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={location} // change
            onChange={(e) => setLocation(e.target.value)} // change
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#FF6500" },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF6500",
                  boxShadow: "0 0 6px 2px rgba(255, 101, 0, 0.4)",
                },
              },
            }}
          />

          <TextField
            label="User" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={user} // change
            onChange={(e) => setUser(e.target.value)} // change
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#ccc" },
                "&:hover fieldset": { borderColor: "#FF6500" },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF6500",
                  boxShadow: "0 0 6px 2px rgba(255, 101, 0, 0.4)",
                },
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#FF6500",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              fontWeight: "bold",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "#FF4500",
                transform: "scale(1.05)",
              },
            }}
          >
            Assign Device
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AssignDevice;
