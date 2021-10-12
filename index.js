const express = require("express");
const mongoose = require("mongoose");

const PORT = 4141;
const app = express(); 
const todoRoutes = require("./routes/TodoRoutes");
const url = "mongodb://localhost/todolist";
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true}; //useFindAndModify: false}; // For solving the duplication warning messages

app.use(express.json()); // Take the req and parse the Json formated body of the req, and each property inside of the body is reflected as a variable or as a property inside of (req.body)-variable

mongoose.connect(url, connectionOptions)
    .then(() => console.log("connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);// Base path /todo/

app.listen(PORT, () => {
    console.log("The server is listeneing on port", PORT);
});