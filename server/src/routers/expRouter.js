const express = require("express");
const { v4: uuidv4 } = require("uuid");

// Middleware import
// const { validateUser } = require("../middleware");

// Create Route
const expRouter = express.Router();

let exp = [
   { id: uuidv4(), cat: "Home", amount: 300 },
   { id: uuidv4(), cat: "Food", amount: 200 },
   { id: uuidv4(), cat: "Transport", amount: 150 },
   { id: uuidv4(), cat: "Entertainment", amount: 100 },
   { id: uuidv4(), cat: "Health", amount: 250 },
   { id: uuidv4(), cat: "Education", amount: 500 },
   { id: uuidv4(), cat: "Shopping", amount: 400 },
   { id: uuidv4(), cat: "Personal Care", amount: 350 },
   { id: uuidv4(), cat: "Investments", amount: 600 },
   { id: uuidv4(), cat: "Gifts", amount: 450 },
];

// # ROUTES #

// GET - /api/exp - returns all expenses
expRouter.get("/api/exp", (req, resp) => {
   resp.status(200).json(exp);
});

module.exports = expRouter;
