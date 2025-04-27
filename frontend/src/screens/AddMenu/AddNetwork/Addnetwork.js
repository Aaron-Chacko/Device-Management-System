import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import "./Addnetwork.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const AddNetwork = () => {
  const [networkID, setNetworkID] = useState("");
  const [networkType, setNetworkType] = useState("");
  const [networkLoopbackIP, setLoopbackIP] = useState("");
  const [networkLANIP, setLANIP] = useState("");
  const [networkWANIP, setWANIP] = useState("");
  const [networkLANStatus, setLANStatus] = useState("");
  const [networkWANStatus, setWANStatus] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API or backend
    const networkData = {
      networkID,
      networkType,
      networkLoopbackIP,
      networkLANIP,
      networkWANIP,
      networkLANStatus,
      networkWANStatus,
    };

    try {
      // Example API call to add a new network
      const response = await fetch("/api/networks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(networkData),
      });

      if (response.ok) {
        alert("Network Added Successfully!");
        navigate("/network-list"); // Navigate to the network list page after successful submission
      } else {
        alert("Failed to add network.");
      }
    } catch (error) {
      console.error("Error adding network:", error);
      alert("Error adding network. Please try again.");
    }
  };

  const handleMenuClick = () => {
    navigate("/edit"); // Navigate back to the menu
  };

  return (
    <Box className="add-network-container">
      <Button
        startIcon={<MenuIcon />}
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
        Menu
      </Button>
      <Paper elevation={3} className="add-network-form">
        <Typography
          variant="h5"
          className="form-heading"
          sx={{
            fontFamily: "Audiowide, sans-serif",
            color: "#FF6500",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "30px",
            letterSpacing: "2px",
            textShadow: "0px 0px 6px rgba(255, 101, 0, 0.75)",
            marginBottom: 4,
            animation: "pulse 2s infinite",
          }}
        >
          Add New Network
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Network ID" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkID} // change
            onChange={(e) => setNetworkID(e.target.value)} // change
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
            label="Network Type"
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkType}
            onChange={(e) => setNetworkType(e.target.value)}
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
            label="Loopback IP" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkLoopbackIP} // change
            onChange={(e) => setLoopbackIP(e.target.value)} // change
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
            label="LAN IP" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkLANIP} // change
            onChange={(e) => setLANIP(e.target.value)} // change
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
            label="WAN IP" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkWANIP} // change
            onChange={(e) => setWANIP(e.target.value)} // change
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
            label="LAN Status" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkLANStatus} // change
            onChange={(e) => setLANStatus(e.target.value)} // change
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
            label="WAN Status" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkWANStatus} // change
            onChange={(e) => setWANStatus(e.target.value)} // change
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
            Add Network
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddNetwork;
