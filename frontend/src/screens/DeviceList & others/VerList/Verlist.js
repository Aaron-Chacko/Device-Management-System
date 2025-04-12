import React from "react";
import "./Verlist.css";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const version = [
  { id: 1, soft: "V2.3.0_240520", hard: "V10"},
  { id: 2, soft: "CRE_APP_V2.3.0_2411251425", hard: "CR2020_V2A"},
  { id: 3, soft: "CRE_APP_V2.3.0_2501171659", hard: "CR2020V2_V2A"},
  { id: 4, soft: "CRE_APP_V2.3.0_2501070025", hard: "CR2020_V2A"},
  { id: 5, soft: "V2.3.0_221217", hard: "V2A"},
  { id: 6, soft: "V2.3.0_221203", hard: "V2A"},
  { id: 7, soft: "V2.3.0_230302", hard: "V2A"},
];

const VersionList = () => {
  return (
    <Box className="list-container">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography
          variant="h4"
          className="list-heading"
          sx={{
            fontFamily: "Audiowide, sans-serif",
            color: "#FF6500",
            fontSize: 34,
            fontWeight: "bold",
            textShadow: "0px 0px 5px rgba(255, 101, 0, 0.75)",
            animation: "pulse 2s infinite",
          }}
        >
          Version List
        </Typography>
  
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FF6500" }}
          component={Link}
          to="/dashboard"
        >
          Dashboard
        </Button>
      </Box>
  

        <Paper elevation={4} className="table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Soft Version</b></TableCell>
                <TableCell><b>Hard Version</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {version.map((version) => (
                <TableRow key={version.id}>
                  <TableCell>{version.id}</TableCell>
                  <TableCell>{version.soft}</TableCell>
                  <TableCell>{version.hard}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
  );
};

export default VersionList;
