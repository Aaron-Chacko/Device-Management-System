import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./menu.css"; 

const AddMenu = () => {
  const navigate = useNavigate();

  const options = [
    { title: "Add Device", route: "/edit/device" },
    { title: "Add Network", route: "/edit/network" },
    { title: "Add Version", route: "/edit/version" },
    { title: "Add Activity", route: "/edit/activity" },
  ];

  return (
    <Box className="addmenu-container">
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Audiowide, sans-serif",
          color: "#FF6500",
          fontWeight: "bold",
          textAlign: "center",
          mb: 4,
        }}
      >
        What do you want to add?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {options.map((option) => (
          <Grid item xs={12} sm={6} md={3} key={option.title}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
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
