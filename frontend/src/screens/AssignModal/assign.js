import React, { useState } from "react";
import "./assign.css";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";

const AssignDeviceModal = () => {
  const [open, setOpen] = useState(false);
  const [deviceId, setDeviceId] = useState("");
  const [userId, setUserId] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAssign = () => {
    console.log("Assigned", deviceId, "to user", userId);
    handleClose();
  };

  return (
    <div className="assign-container">
      <Button variant="contained" className="assign-button" onClick={handleOpen}>
        Assign Device
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="assign-modal">
          <Typography variant="h5" className="assign-title">
            Assign Device
          </Typography>
          <TextField
            label="Device ID"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            fullWidth
            select
            margin="normal"
          >
            <MenuItem value="D001">D001</MenuItem>
            <MenuItem value="D002">D002</MenuItem>
          </TextField>
          <TextField
            label="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            fullWidth
            select
            margin="normal"
          >
            <MenuItem value="U001">U001</MenuItem>
            <MenuItem value="U002">U002</MenuItem>
          </TextField>
          <Button variant="contained" className="assign-submit" onClick={handleAssign}>
            Assign
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AssignDeviceModal;
