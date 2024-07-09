const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const middleware = require('../middleware/jsonwebtoken')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password', userController.resetPassword);
router.put('/edit-profile', middleware, userController.editProfile);

module.exports = router;
