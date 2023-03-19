const path = require('path')
const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMidlewear')
const connectDB = require('./config/db')
const port = 5000 || 5000;
const cors = require('cors')

connectDB();

const app = express();

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yoasd!')
})

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started ${port}`))