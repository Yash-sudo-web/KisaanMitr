require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require("./db")
const user = require("./routes/user")
const chat = require("./routes/chat")

connection();

app.use(express.json());
app.use(cors());

app.use("/api/user", user);
app.use("/api/chat", chat);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
