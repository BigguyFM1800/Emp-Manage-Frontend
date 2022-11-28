const pool = require("../../Config/database");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');

const postTodo = (req, res) => {
    const {title, description, due_date} = req.body
  
    pool.query('INSERT INTO todo (title, description, due_date) VALUES ($1, $2, $3) RETURNING *', [title, description, due_date], (error, results) => {
      if (error) {
       return res.status(400).json({
         error: "database query error"
       })
      }
      res.status(200).send(`User added with ID: ${results.rows[0].id}`)
    })
  }
   
  module.exports = {
    postTodo}