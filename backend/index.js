import express from "express";
const app = express();
import mysql from "mysql";
const Port = 5000;

// //Connection pool
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "petstay",
});

//Middlewares
app.use(express.json());


/* Property */

//Fetch all properties
app.get("/api/property/get", (req, res) => {
    // res.send("<h1>Hello</h1>")
    
    //GET data from database
    pool.query("SELECT id, name, type, city, description, price, rating, imgName FROM properties", (err, property) => {
        res.send(property);
    });
});

//Fetch one specific property
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
    pool.query("INSERT INTO properties(name, type, city, description, price, rating, imgName) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, type, city, description, price, rating, imgName], (err, property) => {
        if (err) throw err;
        res.send(property);
    });
});

//Update property ダメーーー
app.put("/api/property/put/:id", (req, res) =>{
    const id = req.params.id
    const name = req.body.name;
    const type = req.body.type;
    const city = req.body.city;
    const description = req.body.description;
    const price = req.body.price;
    const rating = req.body.rating;
    const imgName = req.body.imgName;
    pool.query("UPDATE properties(name, type, city, description, price, rating, imgName) SET (?, ?, ?, ?, ?, ?, ?) WHERE id = ? ", id, [name, type, city, description, price, rating, imgName], (err, property) => {
        if (err) throw err;
        console.log(property);
    });
});

//Delete property ダメーーー
app.delete("/api/property/delete/:id", (req, res) =>{
    const id = req.params.id;
    pool.query("DELETE * FROM properties WHERE id = ?", id, (err, property) => {
        if (err) throw err;
        console.log(property);
    })
    // pool.query("COMMIT", (err, property) => {
    //     if (err) throw err;
    //     console.log(property);
    // })
})


/* Register */

//Add a user
app.post("/api/auth/post", (req, res) =>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    pool.query("INSERT INTO users(username, email, password) VALUES (?, ?, ?)", [username, email, password], (err, users) =>{
        if (err) throw err;
        console.log(users);
    })
})

//to check the server is connected
app.listen (Port, console.log("サーバーが開始されました"));
//to check the db is connected
pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("MySQLと接続中です");})