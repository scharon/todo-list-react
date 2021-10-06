const express = require("express");
const mongoose = require("mongoose");

const PORT = 3030;
const app = express(); 
const todoRoutes = require("./routes/TodoRoutes");

mongoose.connect("mongodb://localhost/todolist")
    .then(() => console.log("connected successfully"))
    .catch((err) => console.error(err));

app.use("/todo", todoRoutes)// /todo/

app.listen(PORT, () => {
    console.log("The server is listeneing on port", PORT);
});