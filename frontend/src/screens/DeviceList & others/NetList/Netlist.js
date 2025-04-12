import React from "react";
import "./Netlist.css";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const network = [
  { id: 1, type: "WAN", loopback: "192.168.9.2/32", lanip: "192.168.6.1", wanip: "192.168.10.132", lanstatus: "Inactive", wanstatus: "Inactive"},
  { id: 2, type: "WAN", loopback: "192.168.99.2/32", lanip: "192.168.6.1", wanip: "192.168.10.107", lanstatus: "Inactive", wanstatus: "Inactive"},
  { id: 3, type: "WAN", loopback: "192.168.9.2/32", lanip: "192.168.6.1", wanip: "192.168.10.87", lanstatus: "Inactive", wanstatus: "Inactive"},
  { id: 4, type: "4G", loopback: "", lanip: "192.168.5.1", wanip: "", lanstatus: "Inactive", wanstatus: "Inactive"},
  { id: 5, type: "WAN", loopback: "192.168.99.2/32", lanip: "192.168.6.1", wanip: "192.168.10.103", lanstatus: "Inactive", wanstatus: "Inactive"},
  { id: 6, type: "4G", loopback: "192.168.99.2/32", lanip: "192.168.14.206", wanip: "192.dummy", lanstatus: "Active", wanstatus: "Inactive"},
  { id: 7, type: "4G", loopback: "192.168.99.2/32", lanip: "192.168.14.190", wanip: "192.dummy2", lanstatus: "Active", wanstatus: "Inactive"},
];

const NetworkList = () => {
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
          Network List
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
                <TableCell><b>Type</b></TableCell>
                <TableCell><b>Loopback IP</b></TableCell>
                <TableCell><b>LAN IP</b></TableCell>
                <TableCell><b>WAN IP</b></TableCell>
                <TableCell><b>LAN Status</b></TableCell>
                <TableCell><b>WAN Status</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {network.map((network) => (
                <TableRow key={network.id}>
                  <TableCell>{network.id}</TableCell>
                  <TableCell>{network.type}</TableCell>
                  <TableCell>{network.loopback}</TableCell>
                  <TableCell>{network.lanip}</TableCell>
                  <TableCell>{network.wanip}</TableCell>
                  <TableCell>{network.lanstatus}</TableCell>
                  <TableCell>{network.wanstatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
  );
};

export default NetworkList;
