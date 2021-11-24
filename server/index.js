const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "login_system",
});

app.post("/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO login (user_name, user_password) VALUES (?,?)", 
        [username, password],
        (err, result) => {
            console.log(err);
    });
});

app.listen(3001, () => {
     console.log("Running on port 3001");
});