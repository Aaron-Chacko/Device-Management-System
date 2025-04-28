import React, { useEffect, useState } from "react"; // Make sure useEffect is imported
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
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:5000/get-activities");
  
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
  
        const data = await response.json();
        console.log("Fetched data:", data);  // Log the response data
  
        if (data.success) {
          setActivities(data.activities);
        } else {
          setError("Error fetching data");
        }
      } catch (error) {
        setError("Error fetching data");
        console.error("Error:", error);
      }
    };
  
    fetchActivities();
  }, []);  

  return (
    <Box className="list-container">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
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

      {error && <Typography color="error">{error}</Typography>}

      <Paper elevation={4} className="table">
       <Box sx={{ maxHeight: 450, overflow: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Activity ID</b>
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
            {activities.length > 0 ? (
              activities.map((activity) => (
                <TableRow key={activity.ActivityID}>
                  <TableCell>{activity.ActivityID}</TableCell>
                  <TableCell>{activity.CreateTime}</TableCell>
                  <TableCell>{activity.LoginTime}</TableCell>
                  <TableCell>{activity.LastConnect}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>No activities found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        </Box>
      </Paper>
    </Box>
  );
};

export default ActivityList;
