const pool = require("../../Config/database");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  console.log({id});
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, response) => {
      // if (error) {
      //   throw error
      // }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    deleteUser}