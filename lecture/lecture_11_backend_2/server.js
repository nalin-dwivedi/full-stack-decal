const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const router = express.Router();

app.use(express.json()); // Utilities for request bodies
app.use(express.urlencoded({ extended : true })); // Utlilities for query params

// Server Setup
app.use("/", router);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello world");
});

// db setup
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/database-tutorial";

mongoose.connect(url, { useNewUrlParser : true });

const db = mongoose.connection;

db.once("open", _ => {
    console.log("Database connected:", url);
});

db.once("error", err => {
    console.log("connection error:", err);
});

// Create our first model (instance of a model is called a document)
// Step 1. create a schema: A scheme is a JSON object that defines the structure and contents of the data
const Schema = mongoose.Schema;

const item = new Schema({
    title : String,
    task : String,
    date : String,
    urgency : Number, // 1 is not that urgent, 3 is urgent
});

const TODO = mongoose.model("TODO", item);

// CURD operations for MongoDB & Express

// Create
router.post("/db", (req, res) => {
    const todo = new TODO({ // Create TODO item with the argument fields
        title : req.body.title,
        task : req.body.task,
        date : req.body.date,
        urgency : req.body.urgency,
    });

    todo.save((error, document) => {
        if (error) {
            res.json({ status : "failure" });
        } else {
            res.json({ // Save TODO item to the database
                status : "success",
                id : todo._id,
                content : req.body,
            });
        }
    });
});

// Retrieve
router.get("/db/all", (req, res) => {
    TODO.find().then((todos) => {
        res.json({ message : "Return all todos.", todos : todos });
    });
});

// Intro to routers
router.route("/db/:id")
    .get((req, res) => {    
        // get a certain item from the db
        TODO.findById(req.params.id, (error, todo) => {
            if (error) {
                res.json({ status : "failure" });
            } else {
                res.json(todo);
            }
        });
    })
    .put((req, res) => {
        TODO.findByIdAndUpdate(req.params.id, req.body, (error, todo) => {
            if (error) {
                res.json({ status : "failure" });
            } else {
                res.json(todo);
            }
        });
    })
    .delete((req, res) => {
        TODO.findByIdAndDelete(req.params.id, (error, todo) => {
            if (error) {
                res.json({ status : "failure" });
            } else {
                res.json(todo);
            }
        });
    })