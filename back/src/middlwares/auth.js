const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;
console.log('JWT Secret:', jwt_secret); 

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Token not provided "});
  }

  jwt.verify(token, jwt_secret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token', err });
    }

    req.user = user;
    next();
  });
};

module.exports = exports.authenticateToken;