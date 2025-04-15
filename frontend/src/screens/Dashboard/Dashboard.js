import React from "react";
import "./Dashboard.css";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ReportIcon from "@mui/icons-material/Report";
import PersonIcon from "@mui/icons-material/Person";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";

function DashboardCard({ title, icon, count }) {
  return (
    <Card className="dashboard-card" sx={{ boxShadow: 4 }}>
      <CardContent
        className="card-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {icon}
        <Typography
          variant="h6"
          className="card-title"
          sx={{
            fontFamily: "Russo One, sans-serif",
            fontWeight: "bold",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        {count && (
          <Typography
            variant="h4"
            className="card-count"
            sx={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: 24,
              fontWeight: 600,
              color: "#FF6500",
            }}
          >
            <CountUp end={parseInt(count)} duration={1.5} />
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

const Dashboard = () => {
  return (
    <Box className="dashboard-container">
      <Typography
        variant="h4"
        className="dashboard-heading"
        sx={{
          fontFamily: "Audiowide, sans-serif",
          color: "#FF6500",
          fontSize: 38,
          fontWeight: "bold",
          textShadow: "0px 0px 5px rgba(255, 101, 0, 0.75)",
          marginBottom: 8,
        }}
      >
        Device Inventory Dashboard
      </Typography>

      <Grid container spacing={4} justifyContent="space-evenly">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Link to="/devices" style={{ textDecoration: "none" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <DashboardCard
                title="Total Devices"
                icon={<DevicesIcon className="dashboard-icon" />}
                count="132"
              />
            </motion.div>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Link to="/edit" style={{ textDecoration: "none" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <DashboardCard
                title="Add or Edit"
                icon={<AddBoxIcon className="dashboard-icon" />}
                count="+"
              />
            </motion.div>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Link to="/assign" style={{ textDecoration: "none" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <DashboardCard
                title="Assigned Devices"
                icon={<AssignmentIndIcon className="dashboard-icon" />}
                count="89"
              />
            </motion.div>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <DashboardCard
                title="Reports"
                icon={<ReportIcon className="dashboard-icon" />}
                count="View"
              />
            </motion.div>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        >
          <Link to="/users" style={{ textDecoration: "none" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <DashboardCard
                title="Users"
                icon={<PersonIcon className="dashboard-icon" />}
                count="1"
              />
            </motion.div>
          </Link>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)", // Hover effect
          },
          position: "fixed", // Fix the position at the bottom of the screen
          bottom: "20px", // Distance from the bottom of the screen
          left: "50%", // Center horizontally
          //transform: "translateX(-50%)", // Corrects the centering
          marginBottom: "80px", // Adds bottom margin to prevent overlap with other elements
        }}
      >
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DashboardCard
              title="About Us"
              icon={<InfoIcon className="dashboard-icon" />}
            />
          </motion.div>
        </Link>
      </Grid>
    </Box>
  );
};

export default Dashboard;
