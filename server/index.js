
import express from 'express' 
import { config } from 'dotenv';
import cors from 'cors';
import connectToMongodb from './database/db.js';
import route from './route/route.js';
config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', route);
connectToMongodb();
app.use(express.static("../client/build"))
app.listen(process.env.PORT,(res,req)=>{
    console.log(`Server is running ${process.env.PORT}`)
})