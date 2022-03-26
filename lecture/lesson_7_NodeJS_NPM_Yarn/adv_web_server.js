const axios = require('axios');
const express = require('express');
const port = 3000;
const app = express();

app.use(express.json()); // Utilities for request bodies
app.use(express.urlencoded({ extended : true })); // Utilities for query params

let counter = 0; // inner implementation
stupidDB = {}; // initialize our dumb database

// GET Requests

app.get('/', (req, res) => {
    // homepage
    res.send('stupidDB API');
});

app.get('/info/index', (req, res) => {
    // get the current index
    res.send({ counter : counter });
});

app.get('/info/capacity', (req, res) => {
    // get the capacity
    res.send({ capacity : Object.keys(stupidDB).length });
});

app.get('/db/all', (req, res) => {
    // get all items from the db
    res.send(stupidDB);
});

app.get('/db/:id', (req, res) => {
    // get a certain item from the db
    const id = req.params.id;
    if (id in stupidDB) {
        res.send(stupidDB[id]);
    } else {
        res.send({ error : 'no object found with this id' });
    }
});

// POST Requests

app.post('/db', (req, res) => {
    console.log(req);
    const item = req.body.item; // access our request body
    stupidDB[counter] = item; // add body item at index
    counter += 1; // increment counter
    res.send(`POST Request Successful. Item placed: ${item}`);
});

// PUT Requests

app.put('/db/:id', (req, res) => {
    const id = req.params.id; // get the index of the data to update
    const item = req.body.item; // access the body of the request which holds new data
    if (id in stupidDB) {
        stupidDB[id] = item; // insert destructively
        res.send({ newItem : item });
    } else {
        res.send({ error : 'no object found with this id' });
    }
});

// Server Setup

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});