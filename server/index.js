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
    database: "appointmentsystem",
});

app.post("/register", (req,res) => {


    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO login (user_name, user_password) VALUES (?,?)",
        [username,password],
        (err,result) => {
        console.log(err);
    });
});

app.post("/login",(req,res) => {


    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM login WHERE user_name = ? AND user_password = ?",
        [username,password],
        (err,result) => {
            if(err) {
                res.send({err: err});
            }

            if(result.length > 0) {
                res.send(result);
            }
            else {
                res.send({message: "Wrong username/password"});
            }

        }
    );
});

app.post("/search",(req,res) => {

    const keyWord = req.body.keyWord;

    db.query(
        "SELECT person.first_name, person.last_name, physician.expertise, physician.physician_id FROM person JOIN physician ON physician.physician_id = person.person_id WHERE first_name = ?",
        [keyWord],
        (err,result) => {
            if(err) {
                res.send({err: err});
            }

            if(result.length > 0) {
                res.send(result);
            }
        }
    );
});

app.post("/availability",(req,res) => {

    const physician_id = req.body.physician_id;

    db.query(
        "SELECT * FROM availability WHERE physician_id = ?",
        [physician_id],
        (err,result) => {
            if(err) {
                res.send({err: err});
            }

            if(result.length > 0) {
                res.send(result);
            }
        }
    );
});


app.listen(3001, () => {
    console.log("Server running on port 3001");
});

