const express = require("express");
let app = express();
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
require("./db/conn");
app.use(express.json());
app.use(cors());

app.use(require("./routes/userRoutes"));

app.get("/", (req, res) => {
  res.send("hello from backend");
});

app.listen(process.env.PORT, console.log("server is running...."));
