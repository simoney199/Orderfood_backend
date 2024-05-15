const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : ["https://order-food-six-bay.vercel.app/"],
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

mongoose.connect('mongodb+srv://nhom1:admin@nhom1.a9la49x.mongodb.net/?retryWrites=true&w=majority&appName=nhom1')

})
