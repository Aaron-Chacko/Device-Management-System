import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import "./AddActivity.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const AddActivity = () => {
  const [activityID, setactivityID] = useState("");
  const [createTime, setCreateTime] = useState("");
  const [loginTime, setLoginTime] = useState("");
  const [lastConnect, setLastConnect] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/add-activity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activityID,
          createTime,
          loginTime,
          lastConnect,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Activity Added Successfully! 🎉");
        navigate("/edit"); // or wherever you wanna go after adding
      } else {
        alert("Failed to add activity. 😞");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, try again later 🚨");
    }
  };

  const handleMenuClick = () => {
    navigate("/edit"); // Navigate back to the menu
  };

  return (
    <Box className="add-activity-container">
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
      <Paper elevation={3} className="add-activity-form">
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
          Add New Activity
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Activity ID" // change
            variant="outlined"
            fullWidth
            margin="normal"
            value={activityID} // change
            onChange={(e) => setactivityID(e.target.value)} // change
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
            label="Create Time"
            type="date"
            fullWidth
            margin="normal"
            value={createTime}
            onChange={(e) => setCreateTime(e.target.value)}
            InputLabelProps={{
              shrink: true, // ensures label stays above the field
            }}
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
            label="Login Time" //change
            type="date"
            fullWidth
            margin="normal"
            value={loginTime} //change
            onChange={(e) => setLoginTime(e.target.value)} //change
            InputLabelProps={{
              shrink: true, // ensures label stays above the field
            }}
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
            label="Last Connect" //change
            type="date"
            fullWidth
            margin="normal"
            value={lastConnect} //change
            onChange={(e) => setLastConnect(e.target.value)} //change
            InputLabelProps={{
              shrink: true, // ensures label stays above the field
            }}
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
            Add Activity
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AddActivity;
