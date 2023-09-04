// import express from "express";
// import axios from "axios";


// const app = express();
// const userOne = 'ab8b504939msh9101b908d8978aap1f2a65jsn7068f7b5548e'
// const port = 4000;
// const API_URL = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';


// app.get("/", async(req,res)=>{
//   try{
//     const result = await axios.get(API_URL , {
//        headers: {
//       X-RapidAPI-Key: userOne ,
//       X-RapidAPI-Host: moviesdatabase.p.rapidapi.com,
//     }
//     });
//     res.render("index.ejs", {content:result.data});
//   }catch(error){
//     console.log("error is occured");
//     res.status(500).send("failed to fetch avtivity")
//   }

// })



// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.js
// import express from 'express';
// import axios from 'axios';

// const app = express();
// const port = 3000; // Replace this with your desired port number

// // Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', './views');

// // Middleware to serve static files from the "public" folder
// app.use(express.static('public'));

// // Create a route to render the user interface
// app.get('/titles/series/:seriesId', async (req, res) => {
//   const seriesId = req.params.seriesId;
//   const options = {
//     method: 'GET',
//     url: `https://moviesdatabase.p.rapidapi.com/titles/series/${seriesId}`,
//     headers: {
//       'X-RapidAPI-Key': 'ab8b504939msh9101b908d8978aap1f2a65jsn7068f7b5548e',
//       'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     const seriesData = response.data;

//     // Render the "series" template and pass the data to it
//     res.render('index.ejs', { seriesData });
//   } catch (error) {
//     console.error(error);
//     res.status(error.response?.status || 500).json({ error: 'Something went wrong' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// app.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Replace this with your desired port number

// Middleware to allow Cross-Origin Resource Sharing (CORS)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Create a route to fetch a random Chuck Norris joke
app.get('/api/jokes', async (req, res) => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    const joke = response.data.value;
    res.json({ joke });
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ error: 'Something went wrong' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


