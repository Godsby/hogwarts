//import express,Express is a server-side web framework for nodeJS
const express = require('express');
//invoke express 
const app = express();
//import body-parser middleware
const bodyParser = require('body-parser');
//import students.js from routes
const students = require('./routes/students.js');
const teachers = require('./routes/teachers');
const wands = require('./routes/wands');
//use bodyParser to encode to JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/students', students);
app.use('/teachers', teachers);
app.use('/wands', wands);


app.get('/', (req, res) => {
  res.send('This is Homepage');
})
//
app.listen(3000, () => {
  console.log('Listening to Port 3000');
})
