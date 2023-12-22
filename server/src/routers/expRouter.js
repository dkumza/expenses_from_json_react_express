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
expRouter.get("/api/exp", (req, res) => {
   fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
         console.error(err);
         return res.status(500).send(err);
      }
      const allData = JSON.parse(data);
      res.status(200).json(allData);
   });
});

// POST - /api/exp/:add - add new expenses
expRouter.post("/api/exp/", (req, res) => {
   console.log(req.body);
   const newExpenses = {
      id: uuidv4(),
      cat: req.body.cat,
      amount: req.body.amount,
   };
   const exitingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
   exitingData.push(newExpenses);
   fs.writeFileSync(filePath, JSON.stringify(exitingData));
});

module.exports = expRouter;
