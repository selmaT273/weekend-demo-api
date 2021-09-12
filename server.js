'use strict'

// bring in all my dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 3002;

// create an instance of my server
const app = express();

// enable CORS
app.use(cors());

app.get('/', (request, response) => {
  response.send('Home page');
})


// start server
app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});