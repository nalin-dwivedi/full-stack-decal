const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get('/create', (req, res) => {
    let name = req.query.name;
    let type = req.query.type;
    let filename = name + '.' + type;
    fs.appendFile(filename, " ", (err) => {
        if (err) res.send(err);
        res.send({
            "message" : "File created!",
            "name" : name,
            "type" : type
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});