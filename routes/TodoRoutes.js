const router = require("express").Router();
const Todo = require("../models/Todo");

router.get("/", (req, res) => {
   // console.log("Welcome in the index page");
    Todo.find((err, result) => {
        if(err) throw new Error(err);
        //console.log(result); 
        res.json(result); // Retrun an Array of Object inside the database 
    });
});

router.post("/", (req, res) => {
    Todo.create(req.body, (err, result) => {
        if(err) throw new Error(err);
        //console.log(result);
        res.json(result);
    });
});

router.put("/:id", (req, res) => {
    // the object {returnOriginal: false} or {new: true} Return the new updated record (Json)
    Todo.findOneAndUpdate({_id: req.params.id}, req.body, {returnOriginal: false}, (err, result) => {
        if(err) throw new Error(err);
        //console.log(result); 
        res.json(result);
    });
});

router.delete("/:id", (req, res) => {
    Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => { //accept ID that is part in the url
        if(err) throw new Error(err);
        //console.log(result);
        res.end(); // puisque le server ne doit rien retourner quand on efface
    });
});

module.exports = router;