import express from 'express'

import dotenv from 'dotenv'
import cors from "cors"
import connectDb from './Config/db.js';
import siginRoutes from './Routes/Signin.js'
dotenv.config();

const app= express();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}));

app.get('/', (req,res)=>{
    res.send("ApI is running successfully 🚗")
})

app.use('/api', siginRoutes)

const port = process.env.PORT || 5000; 

connectDb().then(()=>{
    app.listen(port,()=>
    console.log(`server is running successfully on port ${port}`)
    );
}).catch(err=>{
    console.log("database connection failed", err)
});