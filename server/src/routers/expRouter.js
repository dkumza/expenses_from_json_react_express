const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Middleware import
// const { validateUser } = require("../middleware");

// Create Route
const expRouter = express.Router();

const path = require("path");
const filePath = path.resolve(__dirname, "../data/exp.json");

// # ROUTES #

// GET - /api/exp - returns all expenses
// expRouter.get("/api/exp", (req, resp) => {
//    resp.status(200).json(exp);
// });

// POST - /api/exp/:add - add new expenses
expRouter.get("/api/exp", (req, res) => {
   fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
         console.error(err);
         return res.status(500).send(err);
      }
      const allData = JSON.parse(data);
      console.log(allData);
      res.status(200).json(allData);
      // Now you can use allData
   });
});

module.exports = expRouter;
