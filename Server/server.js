const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./router/routes');
const path = require("path");
const uploadPath = path.join(__dirname, './uploads');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()

const mongoKey = process.env.MONGOKEY
const port = process.env.PORT || 3000

//Express setup
const app = express();

//middleware setup
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(express.json());
//cors set up
app.use(cors({
  origin: 'https://mern-blog-fe6j.vercel.app',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use('/uploads', express.static(path.join(uploadPath)));

//mongoose setup
mongoose.connect(mongoKey)
.then(response=> console.log('db connected'));

//server connection
app.listen(port, ()=>{
  console.log('Server is running')
})


app.use(blogRoutes)
