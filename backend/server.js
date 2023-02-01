const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

//express app
const app= express()

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
   .then(() => {
    //listen for requests
    app.listen(process.env.PORT,() => {
    console.log('Connected to db & listening on port 4000')
})
   })
   .catch((error) => {
    console.log(error)
   })



