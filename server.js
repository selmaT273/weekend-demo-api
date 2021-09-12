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

// routes
app.get('/', (request, response) => {
  response.send('Home page');
})

app.get('/movies', getMovies);


// start server
app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});

const axios = require('axios');

async function getMovies(request, response) {
  const results = await axios.get('https://api.themoviedb.org/3/search/movie', {
    params: {
      api_key: process.env.MOVIE_API_KEY,
      query: 'Cedar Rapids',
    }
  });
  console.log(results.data);
  response.send('SENT SOMETHING?');
}