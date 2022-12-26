const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const WebSocket = require('ws');
const userRoutes = require('./resources/routes/account');
dotenv.config();

const { PORT } = process.env || 5001;

const socketServer = new WebSocket.Server({ port: 3030 });

socketServer.on('connection', (socketClient) => {
  console.log('connected');
  console.log('client set length: ', socketServer.clients.size)

  socketClient.on('close', (socketClient) => {
    console.log('closed');
    console.log('Number of clients: ', socketServer.clients.size)
  })
})

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})