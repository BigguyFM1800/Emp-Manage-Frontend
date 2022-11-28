const express = require('express') //import express module
// const bodyParser = require('body-parser')
const router = express.Router();
const app = express();

// todo routes
const { getAllTodo } = require("../Controllers/Todo/getAllTodo.controller");
const { getOneTodo } = require("../Controllers/Todo/getOneTodo.controller");
const { postTodo } = require("../Controllers/Todo/postTodo.controller");
const { updateTodo } = require("../Controllers/Todo/updateTodo.controller");
const { deleteTodo } = require("../Controllers/Todo/deleteTodo.controller");
// const { modes } = require('tar');

// app.get('/getTodo',getAllTodo);
// app.get('/getOneTodo/:id',getOneTodo);
// app.delete('/deleteTodo/:id', deleteTodo);
// app.put('/updateTodo/:id', updateTodo);
// app.post('/postTodo',postTodo);

//module.exports = app;
module.exports = {
    getAllTodo,
    getOneTodo ,
    updateTodo,
    deleteTodo,
    postTodo
}