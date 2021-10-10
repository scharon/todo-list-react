const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

//mongoose.model("Todo", TodoSchema); // Todo = todos in mgdb
module.exports = mongoose.model("Todo", TodoSchema);
