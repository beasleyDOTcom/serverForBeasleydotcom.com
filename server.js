'use strict';
//"require" brings in a library. this one is called express. Then saves it as express.
const express = require('express')

//bring in the dotenv library
//the job of this library is to find hte .env file and get the variable out of it so we can use them in our js file.
require('dotenv').config();


//this gives us a variable that we can use to run all the methods that are in the express library.

const app = express()
//the dotenv library lets us grab the PORT var from the.env using the magic words process.env.variableName

const PORT = process.env.PORT;
app.use(express.static('../Beasleydotcom.com'));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })



app.get('/bananas', (request, response)=> {
    response.send('Hello World and I"m totally bananas')
  })

//this turns on the server
//black moves in to the house located at port 3000.
//three ways to turn on a server 
// one is: node server.js in termninal
//npm start
//this is the best way:
//nodemon
app.listen(PORT, () => {
    console.log(`listening on the ${PORT}`)
});