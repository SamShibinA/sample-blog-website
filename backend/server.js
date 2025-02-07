const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const config=require('./src/config/config.js').development;
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

const db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
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
    const sql = "SELECT * FROM detail ORDER BY id ";
    db.query(sql, (err, results) => {
      if (err) {
        console.error("DB Fetch Error:", err);
        res.status(500).json({ message: "Error fetching data", error: err.sqlMessage });
      } else {
        res.status(200).json(results);
      }
    });
  });


  app.delete("/api/about/:id", (req,res)=>{
    const id=req.params.id;
    const querydel="DELETE FROM detail WHERE id=?";

    db.query(querydel,[id],(err,result)=>{
      if(err){
        console.error("Delete Error:",err);
        res.status(500).json(console.error("Error deleting data",err.message));
      }
      else{
        res.status(200).json(result);
      }

    })

  });

  app.put("/api/about/:id",(req,res)=>{
    const id=req.params.id;
    const {name,email,num,address}=req.body;
    const queryup="Update detail set name=?,email=?,num=?,address=? where id=?";
    const values=[name,email,num,address,id];

    db.query(queryup,values,(err,result)=>{
      if(err){
        console.error("Update Error:",err);
        res.status(500).json({message:"Error updating data",err});
      }
      else{
        res.status(200).json(result);
      }
    })

  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

