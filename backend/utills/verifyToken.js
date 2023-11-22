import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

app.use(cookieParser());

//Verify token
export const verifyToken = (req, res, next) => {
    //console.log(req.cookies);
    const token = req.cookies.access_token;
    if (!token){
        res.status(401).send("You are not authenticated!")
    } else {
        jwt.verify(token,"secretfortoken", (err, result) => {
            //console.log(result)
            if (err) {res.status(403).send("Token is not valid!")}
            else {
                req.user = result;
                console.log(req.user)
                next();
            }
        })
    }
};

//Verify user
export const verifyUser = (req, res, next) => {
    
    verifyToken(req, res, () => {
        console.log(req.user)
        console.log(req.params)
        if (req.user.id === Number(req.params.id) || req.user.isAdmin){
            next()
        } else {
            res.status(403).send("You are not authorized!")
        }
    });
};

export const verifyAdmin = (req, res, next ) => {
    verifyToken(req, res, () => {
        // if (req.user.isAdmin){
        //     next()
        // } else {
        //     if(err) {
        //         res.status(403).send("You are not authorized!")
        //     }
        // }
        //console.log(req.user)
        if (!req.user.isAdmin){
            res.status(403).send("You are not authorized!")
        } else {
            console.log(req.user.isAdmin);
            next()
        }
    });
};

export default {verifyToken, verifyUser, verifyAdmin}