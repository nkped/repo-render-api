import express from 'express';
const app = express()
//import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'


//middleware
app.use(express.json())
dotenv.config()
//app.use(express.urlencoded({extended:false}))
app.use(cors({origin: ['http://localhost:3000', 'https://dep-lalacat-client.onrender.com']}))


app.get("/", (req, res) => {
    res.send('Express is here!')
})


app.get("/greeting", (req, res) => {
     res.status(200).json({"greeting": "bonjour!!"})
})



const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server running on port ${port}`))