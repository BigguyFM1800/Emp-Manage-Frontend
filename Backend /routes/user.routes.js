const express = require('express') //import express module
const cors = require("cors"); //import cors module
const bodyParser = require('body-parser')
const app = express();

//users routes
const {login} = require("../Controllers/user/login")
const {deleteUser} = require("../Controllers/user/deleteUser.controller");
const {getOneUser} = require("../Controllers/user/getOneUser.controller");
const {getAllUsers} = require("../Controllers/user/getAllUsers.controller");
const {updateUser} = require("../Controllers/user/updateUser.controller");
const {register} = require("../Controllers/user/register");

module.exports = {
    getAllUsers,
    getOneUser ,
    updateUser,
    deleteUser,
    register,
    login,
    
}