const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key';
const HARDCODED_TOKEN = 'your-hardcoded-token';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Нет токена. Доступ запрещен!' });
  }

  if (token !== HARDCODED_TOKEN) {
    return res.status(403).json({ message: 'Неверный токен. Доступ запрещен!' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Невалидный токен.' });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;