const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');
const { response } = require('express');

app.get('/nasa', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            res.send(error);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});