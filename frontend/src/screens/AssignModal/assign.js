import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper, CircularProgress } from "@mui/material";
import "./assign.css";
import { useNavigate } from "react-router-dom";

const AssignDevice = () => {
  const [deviceID, setDeviceID] = useState("");
  const [location, setLocation] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState("");  // Error state
  const [loading, setLoading] = useState(false);  // Loading state

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic input validation
    if (!deviceID || !location || !user) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true); // Start loading when submitting

    try {
      const response = await fetch("http://localhost:5000/assign-device", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviceID,
          location,
          user,
        }),
      });
      
      console.log("API Response Status:", response.status);  // Check response status
      const data = await response.json();
      console.log("API Response Data:", data);  // Log the response body
      
      if (response.ok) {
        if (data.success) {
          alert("Device Assigned Successfully! 🎉");
          navigate("/dashboard");
        } else {
          setError(data.message || "Failed to assign device. 😞");
        }
      } else {
        setError("Failed to assign device. Status: " + response.status);
      }      
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Server error, try again later 🚨");
    } finally {
      setLoading(false); // Stop loading when the request is complete
    }
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
        {error && (
          <Typography
            sx={{
              color: "red",
              textAlign: "center",
              marginBottom: 2,
            }}
          >
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Device ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={deviceID}
            onChange={(e) => setDeviceID(e.target.value)}
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
            label="Location"
            variant="outlined"
            fullWidth
            margin="normal"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            label="User"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
            disabled={loading} // Disable the button while loading
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Assign Device"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AssignDevice;
