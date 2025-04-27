import React, { useState, useEffect } from "react";
import "./reports.css";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Reports = () => {
  const navigate = useNavigate(); // Initialize navigate

  // State to hold fetched report data
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  // Handle navigation to dashboard
  const handleMenuClick = () => {
    navigate("/dashboard"); // Navigate back to dashboard
  };

  // Fetch reports data from the backend when the component mounts
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reports');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setReports(data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      }
    };
  
    fetchReports();
  }, []);
   // Empty dependency array means this runs once when the component mounts

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
              <TableCell><strong>DeviceID</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>User</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan="3" style={{ textAlign: "center" }}>Loading...</TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan="3" style={{ textAlign: "center" }}>
                  Error: {error}
                </TableCell>
              </TableRow>
            ) : reports.length === 0 ? (
              <TableRow>
                <TableCell colSpan="3" style={{ textAlign: "center" }}>
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              reports.map((report) => (
                <TableRow key={report.DeviceID}>
                  <TableCell>{report.DeviceID}</TableCell>
                  <TableCell>{report.Location}</TableCell>
                  <TableCell>{report.User}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;
