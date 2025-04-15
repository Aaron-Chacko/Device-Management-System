import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./menu.css";
import bg from "../../../images/edit.jpg";

const AddMenu = () => {
  const navigate = useNavigate();

  const options = [
    { title: "Add Device", route: "/edit/device" },
    { title: "Add Network", route: "/edit/network" },
    { title: "Add Version", route: "/edit/version" },
    { title: "Add Activity", route: "/edit/activity" },
  ];

  return (
    <Box
      className="addmenu-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        height: "100vh",
        padding: "20px",
      }}
    >
      <Button
        variant="contained"
        onClick={() => navigate("/dashboard")}
        sx={{
          zIndex: 9999,
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "#FF6500",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#e64a00",
            transform: "scale(1.05)",
          },
          fontWeight: "bold",
        }}
      >
        ← Dashboard
      </Button>

      <Typography
        variant="h4"
        sx={{
          fontFamily: "Audiowide, sans-serif",
          color: "#FF6500",
          fontWeight: "bold",
          textAlign: "center",
          mb: 6,
          animation: "pulse 2s infinite", // Add the animation here
        }}
      >
        What do you want to add?
      </Typography>

      <Grid container spacing={6} justifyContent="center">
        {options.map((option) => (
          <Grid item xs={12} sm={6} md={3} key={option.title}>
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: 6,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                background: "linear-gradient(to right, #ffffff, #fff5e6)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 10,
                },
              }}
            >
              <CardActionArea onClick={() => navigate(option.route)}>
                <CardContent sx={{ textAlign: "center", py: 6 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#FF6500" }}
                  >
                    {option.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AddMenu;
