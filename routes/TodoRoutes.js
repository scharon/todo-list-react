const router = require("express").Router();

router.get("/", (req, res) => {
    //Handle root
    console.log("Welcome in the index page");
});

module.exports = router;