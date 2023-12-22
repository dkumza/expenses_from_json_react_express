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

app.listen(port, () => {
   console.log(`server is running http://localhost:${port}`);
});
