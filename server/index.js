require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require("./db")
const user = require("./routes/user")
const  chat = require("./routes/chat")
const bodyParser = require("body-parser");
connection()
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/user",user);
app.use("/api/chat",chat);

const port = process.env.PORT || 8080;

const server=app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

let io = require('socket.io')(server, {
  cors: {
    origin: '*', // Replace with the appropriate origin(s) allowed to access Socket.IO
    methods: ['GET', 'POST'], // Specify the allowed methods
    allowedHeaders: ['Content-Type'], // Specify the allowed headers
    credentials: true, // Enable credentials if necessary
  },
});

io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`)
    socket.on('comment', (data) => {
        data.time=Date()
        socket.broadcast.emit('comment', data)
    })
})