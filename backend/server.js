const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');  // Import the database connection

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Make the query case-sensitive using the BINARY keyword
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

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

