const express = require('express')
require('dotenv').config()

const app = express()
const dbConfig = require('./config/dbConfig')
const userRoutes = require('./routes/userRoutes.js')
const movieRoutes = require('./routes/movieRoutes.js')
const theatreRoutes = require('./routes/theatreRoutes.js')
const showRoutes = require('./routes/showRoutes.js')
const bookingRoutes = require('./routes/bookingRoutes.js')

app.use(express.json())
app.use('/api/users', userRoutes.router)
app.use('/api/movies', movieRoutes.router)
app.use('/api/theatres', theatreRoutes.router)
app.use('/api/shows', showRoutes.router)
app.use('/api/bookings/',bookingRoutes.router)
app.listen(8080, () => {
    console.log("Server has started...");
})