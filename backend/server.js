const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("DB Connection Error:");
  } else {
    console.log("Connected to DB");
  }
});

app.post("/api/contact", (req, res) => {
  const { name, email, num, address } = req.body;
  console.log("Received Data:", req.body); 
  const sql = "INSERT INTO detail (name, email, num, address) VALUES (?, ?, ?, ?)";
  const values = [name, email, num, address];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("DB Insert Error:", err);
      res.status(500).json({ message: "Database insert error", error: err.sqlMessage });
    } else {
      res.status(200).json({ message: "Data inserted successfully", result });
    }
  });
});


app.get("/api/about", (req, res) => {
    const sql = "SELECT * FROM detail ORDER BY id DESC LIMIT 1";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("DB Fetch Error:", err);
        res.status(500).json({ message: "Error fetching data", error: err.sqlMessage });
      } else {
        res.status(200).json(results);
      }
    });
  });
  
app.listen(5000, () => console.log("Server running on port 5000"));
