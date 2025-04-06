import React from "react";
import "./reports.css";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const dummyReports = [
  { id: 1, device: "D001", status: "Assigned", date: "2025-04-01", user: "U001" },
  { id: 2, device: "D002", status: "Unassigned", date: "2025-03-28", user: "-" },
  { id: 3, device: "D003", status: "Assigned", date: "2025-03-26", user: "U002" },
];

const Reports = () => {
  return (
    <Box className="reports-container">
      <Typography variant="h4" className="reports-title">
        Device Reports
      </Typography>
      <TableContainer component={Paper} className="reports-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Device</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>User</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
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
