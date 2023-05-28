require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require("./db")
// const user = require("./routes/user")
const bodyParser = require("body-parser");
connection()
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// app.use("/api/user",user);


const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
