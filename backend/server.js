const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');  // Import the database connection

const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());  // Use express.json() instead of bodyParser.json()

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE BINARY Username = ? AND BINARY Password = ?";
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Server error ⚡' });
    }
    if (result.length > 0) {
      return res.json({ success: true });  // Valid login
    } else {
      return res.json({ success: false }); // Invalid credentials
    }
  });
});

// ------------------------------------------------------add data--------------------------------------------------- //
app.post('/add-activity', (req, res) => {
  const { activityID, createTime, loginTime, lastConnect } = req.body;

  const query = "INSERT INTO deviceactivity (ActivityID, CreateTime, LoginTime, LastConnect) VALUES (?, ?, ?, ?)";
  db.query(query, [activityID, createTime, loginTime, lastConnect], (err, result) => {
    if (err) {
      console.error("Error inserting activity:", err);
      return res.status(500).json({ success: false });
    }
    return res.json({ success: true });
  });
});

// Add device route
app.post('/add-device', (req, res) => {
  const { deviceID, deviceName, routerSN, group, status, locationID, versionID, networkID, activityID } = req.body;

  const query = "INSERT INTO devices (DeviceID, DeviceName, RouterSN, Group, Status, LocationID, VersionID, NetworkID, ActivityID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(query, [deviceID, deviceName, routerSN, group, status, locationID, versionID, networkID, activityID], (err, result) => {
    if (err) {
      console.error("Error inserting device:", err);
      return res.status(500).json({ success: false });
    }
    return res.json({ success: true });
  });
});

// Add network route
app.post('/add-network', (req, res) => {
  const { networkID, networkType, networkLoopbackIP, networkLANIP, networkWANIP, networkLANStatus, networkWANStatus } = req.body;

  const query = "INSERT INTO networks (NetworkID, NetworkType, LoopbackIP, LANIP, WANIP, LANStatus, WANStatus) VALUES (?, ?, ?, ?, ?, ?, ?)";
  
  db.query(query, [networkID, networkType, networkLoopbackIP, networkLANIP, networkWANIP, networkLANStatus, networkWANStatus], (err, result) => {
    if (err) {
      console.error("Error inserting network:", err);
      return res.status(500).json({ success: false });
    }
    return res.json({ success: true });
  });
});

// Add version route
app.post('/add-version', (req, res) => {
  const { versionID, versionsoft, versionhard } = req.body;

  const query = "INSERT INTO versions (VersionID, SoftVersion, HardVersion) VALUES (?, ?, ?)";
  
  db.query(query, [versionID, versionsoft, versionhard], (err, result) => {
    if (err) {
      console.error("Error inserting version:", err);
      return res.status(500).json({ success: false });
    }
    return res.json({ success: true });
  });
});

// --------------------------------------------get lists data------------------------------------------- //
app.get('/get-activities', (req, res) => {
  const query = "SELECT ActivityID, CreateTime, LoginTime, LastConnect FROM deviceactivity"; 
  console.log("Running query:", query);

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching activities:", err);
      return res.status(500).json({ success: false });
    }

    console.log("Fetched activities:", result);

    if (result.length === 0) {
      console.log("No activities found in the database.");
    }

    res.json({ success: true, activities: result });
  });
});

app.get('/get-devices', (req, res) => {
  const query = `
    SELECT 
      DeviceID, DeviceName, RouterSN, DeviceGroup, OnlineStatus, 
      LocationID, VersionID, NetworkID, ActivityID
    FROM devices;
  `;
  console.log("Running query:", query);

  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching devices:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    console.log("Fetched devices:", result);

    if (result.length === 0) {
      console.log("No devices found in the database.");
      return res.status(404).json({ success: false, message: "No devices found" });
    }

    res.json({ success: true, devices: result });
  });
});


// -------------------------------------------assign device------------------------------------------- //
app.post('/assign-device', (req, res) => {
  const { deviceID, location, user } = req.body;

  console.log('Request body:', req.body);

  const query = "INSERT INTO assignments (DeviceID, Location, User) VALUES (?, ?, ?)";
  db.query(query, [parseInt(deviceID), location, user], (err, result) => {
    if (err) {
      console.error("Error inserting device assignment:", err);
      return res.status(500).json({ success: false });
    }
    return res.json({ success: true });
  });
});

// Get reports route
app.get('/api/reports', (req, res) => {
  const query = "SELECT * FROM assignments";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching reports:", err);
      return res.status(500).json({ success: false, message: "Failed to fetch reports" });
    }
    console.log("Fetched reports:", result);
    res.json(result);  // Send the result as JSON
  });
});

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
