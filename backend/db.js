const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '127.0.0.1',  // Your DB host
  user: ' ',       // Your DB username
  password: ' ',       // Your DB password
  database: ' ',  // Your DB name
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
