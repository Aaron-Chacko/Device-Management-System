import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import "./Addversion.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const AddVersion = () => {
  const [versionID, setVersionID] = useState("");
  const [versionsoft, setVersionsoft] = useState("");
  const [versionhard, setVersionhard] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic for adding the version (you can use an API call here)
    alert("Version Added Successfully!");
  };

  const handleMenuClick = () => {
    navigate("/edit"); // Navigate back to the menu
  };

  return (
    <Box className="add-version-container">
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
      <Paper elevation={3} className="add-version-form">
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
          Add New Version
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Version ID" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={versionID} // change
            onChange={(e) => setVersionID(e.target.value)} // change
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
            label="Soft Version" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={versionsoft} // change
            onChange={(e) => setVersionsoft(e.target.value)} // change
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
            label="Hard Version" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={versionhard} // change
            onChange={(e) => setVersionhard(e.target.value)} // change
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
            Add Version
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddVersion;
