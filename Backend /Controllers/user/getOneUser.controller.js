const pool = require("../../Config/database");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');

const getOneUser = (request, response) => {
    const id = parseInt(request.params.id)

  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
   
  module.exports = {
    getOneUser
  }