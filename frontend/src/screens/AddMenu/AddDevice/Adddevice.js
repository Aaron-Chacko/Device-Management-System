import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Menu icon
import { useNavigate } from "react-router-dom"; // Navigation hook
import "./Adddevice.css"; // Your CSS file

const AddDevice = () => {
  const [deviceID, setDeviceID] = useState(""); // State for device name
  const [deviceName, setDeviceName] = useState("");
  const [routerSN, setRouterSN] = useState("");
  const [group, setGroup] = useState("");
  const [status, setStatus] = useState("");
  const [locationID, setLocationID] = useState("");
  const [versionID, setVersionID] = useState("");
  const [networkID, setNetworkID] = useState("");
  const [activityID, setActivityID] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/add-device", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deviceID,
          deviceName,
          routerSN,
          group,
          status,
          locationID,
          versionID,
          networkID,
          activityID,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Device Added Successfully! 🎉");
        navigate("/edit"); // Update to the route you want to navigate to
      } else {
        alert("Failed to add device. 😞");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, try again later 🚨");
    }
  };

  const handleMenuClick = () => {
    navigate("/edit"); // Update to your actual menu route
  };

  return (
    <Box className="add-device-container">
      {/* Go Back to Menu button */}
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

      <Paper elevation={3} className="add-device-form">
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
          Add New Device
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
            label="Device Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: "#FF6500",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF6500",
                  boxShadow: "0 0 6px 2px rgba(255, 101, 0, 0.4)",
                },
              },
            }}
          />

          <TextField
            label="Router SN"
            variant="outlined"
            fullWidth
            margin="normal"
            value={routerSN}
            onChange={(e) => setRouterSN(e.target.value)}
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
            label="Group"
            variant="outlined"
            fullWidth
            margin="normal"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
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
            label="Status"
            variant="outlined"
            fullWidth
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
            label="Location ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={locationID}
            onChange={(e) => setLocationID(e.target.value)}
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
            label="Version ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={versionID}
            onChange={(e) => setVersionID(e.target.value)}
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
            label="Network ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={networkID}
            onChange={(e) => setNetworkID(e.target.value)}
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
            label="Activity ID"
            variant="outlined"
            fullWidth
            margin="normal"
            value={activityID}
            onChange={(e) => setActivityID(e.target.value)}
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
            Add Device
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddDevice;
