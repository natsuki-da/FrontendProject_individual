import express from "express";
const app = express();
import mysql from "mysql";
import bcrypt from "bcryptjs";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

import {verifyToken, verifyUser, verifyAdmin} from "./utills/verifyToken.js"

const Port = 5000;


// //Connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'petstay',
});

//Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));


//to check the server is connected
app.listen (Port, console.log("サーバーが開始されました"));
//to check the db is connected
pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("MySQLと接続中です");
});


/* Property */

//Get all properties
app.get("/api/property/get", (req, res) => {
    // res.send("<h1>Hello</h1>")
    
    //GET data from database
    pool.query("SELECT id, name, type, city, description, price, rating, imgName FROM properties", (err, property) => {
        res.send(property);
    });
});

//Get one specific property
app.get("/api/property/get/:id", (req, res) =>{
    const id = req.params.id
    pool.query("SELECT * FROM properties WHERE id = ? ", id, (err, property) => {
        res.send(property);
    });
});

//Add a property
app.post("/api/property/post", (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const city = req.body.city;
    const description = req.body.description;
    const price = req.body.price;
    const rating = req.body.rating;
    const imgName = req.body.imgName;
    //Insert data into database
    pool.query("INSERT INTO properties(name, type, city, description, price, rating, imgName) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, type, city, description, price, rating, imgName], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//Update property
app.put("/api/property/put/:id", (req, res) =>{
    const id = req.params.id;
    const name = req.body.name;
    const type = req.body.type;
    const city = req.body.city;
    const description = req.body.description;
    const price = req.body.price;
    const rating = req.body.rating;
    const imgName = req.body.imgName;

    pool.query("UPDATE properties SET name = ?, type = ?, city = ?, description = ?, price = ?, rating = ?, imgName = ? WHERE id = ?", [name, type, city, description, price, rating, imgName, id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//Delete property
app.delete("/api/property/delete/:id", (req, res) =>{
    const id = req.params.id;
    pool.query("DELETE FROM properties WHERE id = ?", id, (err, result) => {
        if (err) throw err;
        res.send("deleted");
    });
});


/* User */

//Sign up (Register: add a user)
app.post("/api/auth/signup", (req, res) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const username = req.body.username;
    const email = req.body.email;
    const password = hash;
    // console.log(username)
    pool.query("INSERT INTO users(username, email, password) VALUES (?, ?, ?)", [username, email, password], (err, result) => {
        if (err) throw err;
        // res.status(200).send("User has been created.")
    
    });
    });

//Login
// app.get("/api/auth/signin", (req, res) =>{
//     const email = req.body.email
//     const password = req.body.password
//     if (email && password){
//         pool.query("SELECT username, email, password FROM users WHERE email = ?", [email], (err, result) => {
//             // if (bcrypt.compareSync(password, result[0].password)) {return res.send("Successful");
//             if (bcrypt.compareSync(password, result[0].password)) {return res.send(result);
//         } else {
//             res.send("Incorrect Email and/or Password!");
//         } 
//         res.end(); 
//         })
//     }
// });

app.get("/api/auth/signin", (req, res) =>{
    const email = req.body.email
    const password = req.body.password;
    pool.query ("SELECT id, username, email, password, isAdmin FROM users WHERE email = ?", [email], (err, result) => {
        if (result.length <= 0) { 
            res.status(401).send("A user with this email could not be found.");
        } else {
            // const storedUser = result[0];
            //console.log(storedUser);
            const isEqual = bcrypt.compareSync(password, result[0].password);
            if (!isEqual){
                res.status(401).send("Wrong password!")
            // } else {
            //     res.send(result[0].email)
            //     // res.send(`${storedUser}`)
            // }
            } else {
                const token = jwt.sign({ id: result[0].id, isAdmin: result[0].isAdmin}, "secretfortoken", {expiresIn: "1h"});
                res.cookie("access_token", token, {httpOnly: true}).status(200).send("You are logged in.");
            }
        }
    })
});


//Update user
app.put("/api/auth/put/:id", (req, res) =>{
    const id = req.params.id;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const isAdmin = req.body.isAdmin;
    pool.query("UPDATE users SET username = ?, email = ?, password = ?, isAdmin = ? WHERE id = ?", [username, email, password, isAdmin, id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

//Get users
app.get("/api/auth/get", (req, res) => {
    pool.query("SELECT id, username, email, password, isAdmin FROM users", (err, users) => {
        if(err) throw err;
        res.send(users);
    })
})

//Get one specific user
app.get("/api/auth/get/:id", (req, res) =>{
    const id = req.params.id
    pool.query("SELECT * FROM users WHERE id = ? ", id, (err, user) => {
        res.send(user);
    });
});

//Delete user
app.delete("/api/auth/delete/:id", (req, res) =>{
    const id = req.params.id;
    pool.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
        if (err) throw err;
        res.send("deleted");
    });
});

//Login + Verify token 
app.get("/api/auth/signin/checkauthentication", verifyToken, (req, res, next) => {
    res.send("Hello user, you are logged in.")
});

//Login + Verify token and user 
app.get("/api/auth/signin/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("Hello user, you are logged in and you can delete your account.")
});

//Login + Verify token, user and admin
app.get("/api/auth/signin/checkadmin", verifyAdmin, (req, res, next) => {
    res.send("Hello admin, you are logged in and you can delete all accounts.")
});


/* Get searched property */
app.get("/api/get/search/:city", (req, res) => {
    const city = req.params.city
    pool.query("SELECT * FROM properties WHERE city = ?", [city], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})