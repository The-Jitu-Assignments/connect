const { Router } = require('express');
const router = Router();

const accountControllers = require('../controllers/account');

router.post('/register', accountControllers.signUp);
router.post('/login', accountControllers.login);

module.exports = router;