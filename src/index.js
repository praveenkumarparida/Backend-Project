// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({path: './.env'})

connectDB()  //returns Promise
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERROR: ",error);
        throw error;
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB connection Failed !!! ",err);
})