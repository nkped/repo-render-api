import express from 'express';
const app = express()
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'


//middleware
app.use(express.json())
dotenv.config()


//datamodel
const postSchema = mongoose.Schema({
    title: String,
    description: String
})

const Post = mongoose.model('post', postSchema)



//app.use(express.urlencoded({extended:false}))
app.use(cors({origin: 'https://dep-lalacat-client.onrender.com'}))


app.get("/", (req, res) => {
    res.send('Express is here!')
})


app.get("/greeting", (req, res) => {
     res.status(200).json({"greeting": "bonjour!!"})
})

app.get('/posts', (req, res) => {
    Post.find({})
    .then((items) => res.json(items))
    .catch((err) => console.log(err))
})

//db
mongoose.connect(process.env.REACT_APP_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected...'))



const port = process.env.PORT || 3001

app.listen(port, () => console.log(`Server running on port ${port}`))