const mysql = require('mysql')
const express = require('express')
const cors = require('cors');
const app = express();
const port = 3001

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
})

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("running server");
})

app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password;

  db.query("SELECT * FROM sys.users WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {

      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username or password" });
      }
    });
})



app.post('/dashboard', (req, res) => {
  const filter = req.body.selectedItem;

  db.query("SELECT * FROM sys.courses where Subject = ? ;",
    [filter],
    (err, result) => {

      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong choice" });
      }
    });
})

app.post('/RegistrationResult', (req, res) => {
  const result = db.query("SELECT sum(Credits)  FROM sys.registered_courses",
    (err, result) => { 

      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "sum is 0" });
      }
    });
})


module.exports =db;