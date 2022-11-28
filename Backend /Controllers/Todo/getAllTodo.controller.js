const pool = require("../../Config/database");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');

const getAllTodo = (request, response) => {
    pool.query('SELECT * FROM todo ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

   
  module.exports = {
    getAllTodo}