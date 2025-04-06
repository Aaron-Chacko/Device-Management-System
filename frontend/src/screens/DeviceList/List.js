import React from "react";
import "./List.css";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

const devices = [
  { id: 1, name: "MacBook Pro", type: "Laptop", status: "Assigned" },
  { id: 2, name: "iPhone 14", type: "Phone", status: "Available" },
  { id: 3, name: "Samsung Monitor", type: "Monitor", status: "Assigned" },
];

const DeviceList = () => {
  return (
    <Box className="device-list-container">
      <Typography
        variant="h4"
        className="device-list-heading"
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
        Device List
      </Typography>

      <Paper elevation={4} className="device-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Status</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>{device.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default DeviceList;
