import React from "react";
import "./Verlist.css";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper, AppBar, Toolbar, Button } from "@mui/material";

const network = [
  { id: 1, name: "Host_10_132", routersn: "CR20X02109250292", group: "Credo", status: "Online", location: "9", version: "1", network: "1", activity: "1"},
  { id: 2, name: "Host_10_107", routersn: "CR20XQ2308150417", group: "Credo", status: "Online", location: "9", version: "2", network: "2", activity: "2"},
  { id: 3, name: "host_10_87", routersn: "CR20XQ2401260370", group: "Credo", status: "Online", location: "7", version: "2", network: "3", activity: "3"},
  { id: 4, name: "Router", routersn: "CR20XQ2406150734", group: "Credo", status: "Offline", location: "9", version: "3", network: "4", activity: "4"},
  { id: 5, name: "Host_10_103", routersn: "CR20XQ2406150843", group: "Credo", status: "Online", location: "4", version: "4", network: "5", activity: "5"},
  { id: 6, name: "S27", routersn: "CR10WQ2303280121", group: "Credo", status: "Online", location: "4", version: "5", network: "6", activity: "6"},
  { id: 7, name: "S24", routersn: "CR10WQ2303280131", group: "Credo", status: "Online", location: "5", version: "5", network: "7", activity: "7"},
];

const NetworkList = () => {
  return (

      <Box className="list-container">
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
            marginBottom: 4,
          }}
        >
          Network List
        </Typography>

        <Paper elevation={4} className="table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>RouterSN</b></TableCell>
                <TableCell><b>Group</b></TableCell>
                <TableCell><b>Online Status</b></TableCell>
                <TableCell><b>LocationID</b></TableCell>
                <TableCell><b>VersionID</b></TableCell>
                <TableCell><b>NetworkID</b></TableCell>
                <TableCell><b>ActivityID</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {network.map((network) => (
                <TableRow key={network.id}>
                  <TableCell>{network.id}</TableCell>
                  <TableCell>{network.name}</TableCell>
                  <TableCell>{network.routersn}</TableCell>
                  <TableCell>{network.group}</TableCell>
                  <TableCell>{network.status}</TableCell>
                  <TableCell>{network.location}</TableCell>
                  <TableCell>{network.version}</TableCell>
                  <TableCell>{network.network}</TableCell>
                  <TableCell>{network.activity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
  );
};

export default NetworkList;
