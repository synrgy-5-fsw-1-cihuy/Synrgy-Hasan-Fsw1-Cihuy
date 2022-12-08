const bcrypt = require('bcrypt');
const jsonwebtokenUtil = require('../utils/jsonwebtoken.util');
const models = require('../models');
const User = models.user;
const saltRounds = 12;

const registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    let user = {};
    if (role == 'SUPERADMIN') {
      user = await User.create({
        email: email,
        password: hashPassword,
        role: 'ADMIN',
      });
    }
    if (role == 'MEMBER') {
      user = await User.create({
        email: email,
        password: hashPassword,
        role: 'MEMBER',
      });
    }
    res.status(201).json({
      message: 'Registered user successfully',
      data: {
        id: user.id,
        email: user.email,
        role: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    res.status(422).json({ message: 'Failed register user' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userByEmail = await User.findOne({ where: { email: email } });
    console.log(userByEmail);
    if (userByEmail == null) {
      res.status(401).json({ error: 'User account not found' });
      return;
    }
    const checkUserPassword = await bcrypt.compare(
      password,
      userByEmail.password
    );
    if (checkUserPassword == false) {
      res.status(401).json({ error: 'email or password mismatch' });
      return;
    }
    const tokenGenerated = jsonwebtokenUtil.encodeTokenJwt({
      id: userByEmail.id,
      email: userByEmail.email,
      role: userByEmail.role,
    });
    res
      .status(200)
      .json({ message: 'Logged in successfully', token: tokenGenerated });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log in' });
  }
};

const getProfileUser = async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const decodeToken = await jsonwebtokenUtil.checkTokenJwt(token);
    const userFindById = await User.findByPk(decodeToken.id);
    if (userFindById == null) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
      id: userFindById.id,
      email: userFindById.email,
      role: userFindById.role,
      createdAt: userFindById.createdAt,
      updatedAt: userFindById.updatedAt,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get user' });
  }
};

module.exports = { registerUser, loginUser, getProfileUser };
