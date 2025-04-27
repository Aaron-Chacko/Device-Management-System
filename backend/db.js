const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '127.0.0.1',  // Your DB host
  user: 'aaron',       // Your DB username
  password: 'aaron',       // Your DB password
  database: 'm2m_device_management_system',  // Your DB name
  port: 3306, // Your DB port (default is 3306 for MySQL)
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = db;
