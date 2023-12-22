const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const expRouter = require("./routers/expRouter");

const app = express();
const port = 3003;

// # MIDDLEWARE #

app.use(morgan("dev"));
app.use(cors()); // to fix cors error
app.use(express.json()); //to read req.body in json

// # ROUTES #

// Home route
app.get("/", (req, res) => {
   res.send("Hello from Express");
});

// Expenses Router
app.use("/", expRouter);

// catch all route 404 case
app.all("*", (req, res) => {
   res.status(500).json({
      url: req.url,
      msg: "Something went wrong",
      endpoints: "valid endpoints are at - /api/exp",
      method: req.method,
   });
});

app.listen(port, () => {
   console.log(`server is running http://localhost:${port}`);
});
