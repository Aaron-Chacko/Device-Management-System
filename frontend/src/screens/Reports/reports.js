import React from "react";
import "./reports.css";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const dummyReports = [
  {
    id: 1,
    device: "D001",
    status: "Assigned",
    date: "2025-04-01",
    user: "U001",
  },
  {
    id: 2,
    device: "D002",
    status: "Unassigned",
    date: "2025-03-28",
    user: "-",
  },
  {
    id: 3,
    device: "D003",
    status: "Assigned",
    date: "2025-03-26",
    user: "U002",
  },
];

const Reports = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Handle navigation to dashboard
  const handleMenuClick = () => {
    navigate("/dashboard"); // Navigate back to dashboard
  };

  return (
    <Box className="reports-container">
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
        className="reports-title"
        sx={{
          fontFamily: "Audiowide, sans-serif", // Your theme font
          color: "#FF6500", // Orange theme color
          fontWeight: "bold", // Bold text
          textAlign: "center", // Center the text
          fontSize: "36px", // Slightly bigger size, but still in line with your style
          letterSpacing: "2px", // Increased spacing for a cleaner look
          textShadow: "0px 0px 6px rgba(255, 101, 0, 0.75)", // Match your glowing text effect
          marginBottom: 4, // Space at the bottom for separation
          animation: "pulse 2s infinite", // Add your pulse effect from the previous styles
        }}
      >
        Device Reports
      </Typography>

      <TableContainer component={Paper} className="reports-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>ID</strong>
              </TableCell>
              <TableCell>
                <strong>Device</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>User</strong>
              </TableCell>
              <TableCell>
                <strong>Date</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.device}</TableCell>
                <TableCell>{report.status}</TableCell>
                <TableCell>{report.user}</TableCell>
                <TableCell>{report.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;
