const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your-secret-key';
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Нет токена. Доступ запрещен!' });
  }

  if (token !== JWT_SECRET) {
    return res.status(403).json({ message: 'Неверный токен. Доступ запрещен!' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Невалидный токен.' });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;