const express = require('express');
const authenticateToken = require('./moddleware/auth_check');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT

app.use(express.json());
app.use(authenticateToken);
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});