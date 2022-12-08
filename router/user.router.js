const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/api/auth/register', userController.registerUser);
router.post('/api/auth/login', userController.loginUser);
router.get('/api/auth/profile', userController.getProfileUser);

module.exports = router;
