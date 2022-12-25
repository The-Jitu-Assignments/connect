const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./resources/routes/account');
dotenv.config();

const { PORT } = process.env || 5001;

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})