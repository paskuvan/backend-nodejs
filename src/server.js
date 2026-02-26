import express from 'express';

import movieRoutes from './routes/movieRoutes';

const express = require('express');

//API Routes

app.use('/api/movies', movieRoutes);

const app = express();

app.get("/hello", (req, res) => {
    res.json({message: "Hello, World!"});
});

const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// GET, POST, PUT, DELETE
// http://localhost:5001/hello