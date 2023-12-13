import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';

const app = express();

app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`)
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.get('/', (request, response)=>{
            console.log(request);
            return response.status(234).send('Welcome to MERN Bookstore');
        });
    })
    .catch((error)=> {
        console.log(error);
    });