import React from "react";
import "./Actlist.css";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const activity = [
  {
    id: 1,
    create: "2025-01-20 14:24:04",
    login: "2025-01-29 12:01:15",
    last: "2025-01-29 15:47:55",
  },
  {
    id: 2,
    create: "2025-01-20 15:21:01",
    login: "2025-01-31 15:01:10",
    last: "2025-01-31 18:34:31",
  },
  {
    id: 3,
    create: "2025-01-20 15:20:05",
    login: "2025-01-31 15:00:15",
    last: "2025-01-31 18:34:32",
  },
  {
    id: 4,
    create: "2025-01-20 15:30:14",
    login: "2025-01-21 16:21:50",
    last: "2025-01-22 10:05:39",
  },
  {
    id: 5,
    create: "2025-01-20 15:26:55",
    login: "2025-01-31 16:21:12",
    last: "2025-01-31 18:35:11",
  },
  {
    id: 6,
    create: "2023-12-21 13:43:14",
    login: "2025-03-25 18:45:54",
    last: "2025-03-28 12:06:36",
  },
  {
    id: 7,
    create: "2023-12-19 18:32:40",
    login: "2025-03-22 12:15:33",
    last: "2025-03-28 12:06:11",
  },
];

const ActivityList = () => {
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
          Activity List
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
              <TableCell>
                <b>ID</b>
              </TableCell>
              <TableCell>
                <b>Create Time</b>
              </TableCell>
              <TableCell>
                <b>Login Time</b>
              </TableCell>
              <TableCell>
                <b>Last Connect</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activity.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.id}</TableCell>
                <TableCell>{activity.create}</TableCell>
                <TableCell>{activity.login}</TableCell>
                <TableCell>{activity.last}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default ActivityList;
