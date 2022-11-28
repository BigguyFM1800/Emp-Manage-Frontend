const express = require('express') //import express module
const cors = require("cors"); //import cors module
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

var corsOptions = {
  origin: "*"
}

require("./Config/dovevn"); //Import your environmental configs

const user = require("./routes/user.routes"); // access the user routes.js
const todo = require("./routes/todo.routes"); // access the todo routes.js
const Pool = require("./Config/database"); // access the database.js
const { arrayParser } = require('pg-types');

app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 5052;

const hostURL = '0.0.0.0'; //Fault-Tolerant listening port for Backend. Picks available dynamic IPv4 and IPv6 addresses of the local host

Pool.connect((error) =>{ // Connect to the Database
   if (error) {
     }
  else {
    console.log("Data logging initialised");
   }

});

// app.post('/postTodo', (req, res) => {
//   return res.json({data: req.body})
// })

// app.delete('/postTodo', (req, res) => {
//   return res.json({data: req.body})
// })

app.get("/", (request, response) =>{
  response.status(200).send("Sever Initialized and Online. Ready to take OFF!");
});

app.get('/getTodo',todo.getAllTodo);
app.get('/getOneTodo/:id',todo.getOneTodo);
app.delete('/deleteTodo/:id', todo.deleteTodo);
app.put('/updateTodo/:id', todo.updateTodo);
app.post('/postTodo',todo.postTodo);

app.get('/getAllUsers',user.getAllUsers);
app.get('/getOneUser/:id',user.getOneUser);
app.delete('/deleteUser/:id',user.deleteUser);
app.put('/updateUser/:id',user. updateUser);

app.post('/login',user.login);
app.post('/register',user.register)

// app.get("/logout" , (req,res)=>{
//   req.logout();
//   res.redirect("/");
// })

app.get('/logout', function(req, res){
  // clear the remember me cookie when logging out
  res.clearCookie('remember_me');
  req.logout();
  res.redirect('/');
 });

//app.use(todo);

  app.listen(port, () => {
    console.log(`Here we go, All Engines started at ${port}.`)
  })