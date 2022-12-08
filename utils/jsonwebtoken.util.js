const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const encodeTokenJwt = (user) => {
  return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '7h' });
};

const checkTokenJwt = async (token) => {
  return await jwt.verify(token, process.env.TOKEN_SECRET);
};

module.exports = { encodeTokenJwt, checkTokenJwt };
