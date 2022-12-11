const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Using mysql on local machine
// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "password", // P2&fArpg$7rVvmu
//   database: "admission_form", // freedb_admission_form
//   multipleStatements: true,
// });


// Using freedb.tech virtual mysql database
const db = mysql.createConnection({
  user: "freedb_Dk-yoga-instructor",
  host: "sql.freedb.tech",
  password: "P2&fArpg$7rVvmu",
  database: "freedb_admission_form",
  multipleStatements: true,
});

db.connect((error) => {
  if (error) {
    console.log(error);
  }

  if (!error) {
    console.log("Connected successfully");
  }
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const batch = req.body.time;

  db.query(
    "INSERT INTO customer_records(name, age, batch) VALUES (?, ?, ?)",
    [name, age, batch],
    (error, result) => {
      if (error) {
        console.log(error);
      }

      if (result) {
        console.log(result);
        res.send("Values inserted");
      }
    }
  );
});

app.listen(8000, () => {});
