const express = require("express");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "UPDATE"],
  })
);
require("./utils/db")();

app.use("/notes", require("./routes/noteRoutes"));
app.use(require("./utils/error"));

app.listen(8000, () => console.log("server listening on port 8000"));
