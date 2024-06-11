
import dotenv from "dotenv"
import 'dotenv/config'
import { app } from "./app.js";
import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js"
import connectDB from "./db/connectDB.js";

// require('dotenv').config()


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed: " + error);
})




/*
import express from "express";
const app = express();

( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log("ERRORL", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR:",error);
        throw error;
    }
})()

*/

