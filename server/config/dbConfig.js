const mongoose = require('mongoose')    

// this is the way to get the value of a an environment variable declared in .env file 
const mongoURL = process.env.mongo_url

mongoose.connect(mongoURL)

// listener for connection
const connection = mongoose.connection

// on connection event of listener
connection.on('connected', () => {
    console.log('DB Connected');
});
connection.on('error', (err) => {
    console.error('Connection error: ', err.message);
});