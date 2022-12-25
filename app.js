const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const { PORT } = process.env || 5001;

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})