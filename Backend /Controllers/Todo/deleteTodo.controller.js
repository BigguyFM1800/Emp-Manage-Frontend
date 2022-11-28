const pool = require("../../Config/database");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');

const deleteTodo = (request, response) => {
    const id = parseInt(request.params.id)
   
  
    pool.query('DELETE FROM todo WHERE id = $1',[id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }
  
  module.exports = {
    deleteTodo}