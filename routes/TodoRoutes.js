const router = require("express").Router();
const Todo = require("../models/Todo"); // Use to fetch Data from our database

router.get("/", (req, res) => {
    //Handle root
   // console.log("Welcome in the index page");
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        console.log(result);       
    });
});

router.post("/new", (req, res) => {
    console.log(req.body); // whole json-Object
    console.log(req.body.completed);
});

module.exports = router;