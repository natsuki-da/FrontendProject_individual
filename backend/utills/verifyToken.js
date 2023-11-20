import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

app.use(cookieParser());

const verifyToken = (req, res, next) => {
    const token = req.cookie.access_token;
    if (!token){
        res.ratus(401).send("You are not authenticated!")
    } else {
        jwt.verify(token,"secretfortoken", (err, result) => {
            if (err) {res.status(403).send("Token is not valid!")}
            else {
                req.result = result;
                next();
            } 
        })
    }
};

export default verifyToken;