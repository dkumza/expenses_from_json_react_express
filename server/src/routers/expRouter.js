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

// POST - /api/exp/ - add new expenses
expRouter.post("/api/exp/", (req, res) => {
   const newExpenses = {
      id: uuidv4(),
      title: req.body.title,
      cat: req.body.cat,
      amount: req.body.amount,
      date: req.body.date,
   };
   const exitingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
   exitingData.push(newExpenses);
   fs.writeFileSync(filePath, JSON.stringify(exitingData));
   res.status(201).json(exitingData);
});

// edit - PUT - /api/exp/:ID - edit exiting expense by id
expRouter.put("/api/exp/:id", (req, res) => {
   const expenseID = req.params.id;
   let exitingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
   const expExists = exitingData.find((exp) => exp.id === expenseID);
   const foundIdx = exitingData.findIndex((exp) => exp.id === expenseID);

   if (expExists) {
      exitingData[foundIdx] = {
         id: expenseID,
         ...req.body,
      };
      fs.writeFileSync(filePath, JSON.stringify(exitingData));
      res.status(200).json(exitingData);
   }
   if (!expExists) res.status(404).json({ message: "Edit failed, check ID" });
});

// DELETE - /api/exp/:ID - delete by id
expRouter.delete("/api/exp/:id", (req, res) => {
   const expenseID = req.params.id;
   let exitingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
   const expExists = exitingData.find((exp) => exp.id === expenseID);
   if (expExists) {
      exitingData = exitingData.filter((exp) => exp.id !== expenseID);
      fs.writeFileSync(filePath, JSON.stringify(exitingData));
      res.status(200).json(exitingData);
   }
   if (!expExists) res.status(404).json({ message: "Delete failed, check ID" });
});

module.exports = expRouter;
