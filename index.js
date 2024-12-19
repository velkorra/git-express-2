const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});