import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./AddActivity.css";

const AddActivity = () => {
  const [createTime, setCreateTime] = useState("");
  const [loginTime, setLoginTime] = useState("");
  const [lastConnect, setLastConnect] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with logic to save the new activity to your database
    console.log("Activity Added", { createTime, loginTime, lastConnect });
  };

  return (
    <Box className="add-activity-container">
      <Button
        variant="contained"
        sx={{ backgroundColor: "#FF6500", marginBottom: 2 }}
        component={Link}
        to="/edit"
      >
        Back to Menu
      </Button>

      <Typography
        variant="h4"
        className="add-activity-heading"
        sx={{
          fontFamily: "Audiowide, sans-serif",
          color: "#FF6500",
          fontSize: 34,
          fontWeight: "bold",
          textShadow: "0px 0px 5px rgba(255, 101, 0, 0.75)",
          animation: "pulse 2s infinite",
          marginBottom: 4,
        }}
      >
        Add Activity
      </Typography>

      <form onSubmit={handleSubmit} className="activity-form">
        <TextField
          label="Create Time"
          variant="outlined"
          value={createTime}
          onChange={(e) => setCreateTime(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Login Time"
          variant="outlined"
          value={loginTime}
          onChange={(e) => setLoginTime(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Last Connect"
          variant="outlined"
          value={lastConnect}
          onChange={(e) => setLastConnect(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: "#FF6500", marginTop: 2 }}
        >
          Add Activity
        </Button>
      </form>
    </Box>
  );
};

export default AddActivity;
