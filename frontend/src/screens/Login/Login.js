import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import aquilagusLogo from "../../images/favicon_logo.jpg"; // Import your logo image
import TextField from "@mui/material/TextField";
import "./Login.css"; // Adjust the path if needed
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
function Languagedropdown() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "10px",
      }}
    ></div>
  );
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const card = (
  <React.Fragment>
    <CardContent>
      {/* Display the logo as a small icon */}
      <img
        src={aquilagusLogo}
        alt="Aquilagus Logo"
        style={{ width: "50px", height: "50px", marginBottom: "10px" }}
      />
      <Typography
        gutterBottom
        className="pulse-heading"
        sx={{
          fontFamily: "Russo One, sans-serif",
          color: "#FF6500",
          fontSize: 30,
          fontWeight: "semi-bold",
          textShadow: "0px 0px 5px rgba(255, 101, 0, 0.75)",
        }}
      >
        Tenet Networks Private Limited
      </Typography>

      <Typography
        variant="h6"
        component="div"
        sx={{ marginBottom: "20px", fontFamily: "Audiowide, sans-serif" }}
      >
        {bull}Device{bull}Management{bull}Login{bull}
      </Typography>
      <Typography>
        <TextField
          id="outlined-basic"
          label="Alias"
          variant="outlined"
          sx={{
            width: "450px",
            marginBottom: "25px",
            "&:focus-within": {
              borderColor: "#FF6500", // border color when focused
              boxShadow: "0 0 5px #FF6500", //  glow effect on focus
              transition: "all 0.3s ease", // Smooth transition
            },
          }}
        />
      </Typography>
      <TextField
        id="outlined-basic"
        label="Code"
        variant="outlined"
        sx={{
          width: "450px",
          marginBottom: "25px",
          "&:focus-within": {
            borderColor: "#FF6500", //  border color when focused
            boxShadow: "0 0 5px #FF6500", //  glow effect on focus
            transition: "all 0.3s ease", // Smooth transition
          },
        }}
      />
      <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
        <Checkbox {...label} sx={{ color: "#FF6500" }} />
        Remember Me?
      </Typography>
      <Typography>
        <Button
          variant="contained"
          sx={{
            width: "450px",
            marginBottom: "20px",
            backgroundColor: "#FF6500",
            borderRadius: "15px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "orange", // Change the hover color to pink
              transform: "scale(1.05)",
            },
          }}
        >
          Proceed{" "}
        </Button>
      </Typography>
      <Button
        href="#text-buttons"
        sx={{
          fontFamily: "Arial, sans-serif",
          fontSize: "13px",
          color: "#FF6500", // Set the text color to your theme
          textDecoration: "none", // Optional: removes the underline from the link
          "&:hover": {
            color: "#FF4500", // Change color on hover to a darker shade
          },
        }}
      >
        Forgot Password?
      </Button>

      <Languagedropdown />
    </CardContent>
    <CardActions sx={{ justifyContent: "space-between" }}>
      <Button
        size="small"
        sx={{
          color: "#FF6500", // Set text color to theme color
          "&:hover": {
            color: "#FF4500", // Darker shade on hover
            backgroundColor: "transparent", // Remove background color on hover
          },
        }}
      >
        Learn More
      </Button>
      <Button
        size="small"
        sx={{
          color: "#FF6500", // Set text color to theme color
          "&:hover": {
            color: "#FF4500", // Darker shade on hover
            backgroundColor: "transparent", // Remove background color on hover
          },
        }}
      >
        Enable Cookies?
      </Button>
    </CardActions>
  </React.Fragment>
);

function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 550, minHeight: 550 }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: "25px",
          boxShadow: "0 4px 20px rgba(255, 101, 0, 0.6)", // Orange glow effect
        }}
      >
        <CardContent sx={{ padding: 3 }}>{card}</CardContent>
      </Card>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <div className="background">
        <header className="App-header">
          <Box
            sx={{
              background: "linear-gradient(45deg, #FF6500, white)", // Tenet Networks Gradient
              padding: 3,
              borderRadius: 5,
              boxShadow: 3,
            }}
          >
            <OutlinedCard />
          </Box>
        </header>
      </div>
    </div>
  );
}

export default App;
