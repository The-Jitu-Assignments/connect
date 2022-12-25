const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./resources/routes/account');
dotenv.config();

const { PORT } = process.env || 5001;

app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})