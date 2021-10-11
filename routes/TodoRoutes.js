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
    Todo.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        console.log(result);
        //Validation ...
    });
});

router.delete("/remove", (req, res) => {
    Todo.findOneAndRemove({ _id: req.body.id }, (err, result) => {
        if(err) throw new Error(err);
        console.log(result);
    });
});

module.exports = router;