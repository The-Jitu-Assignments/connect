const { Router } = require('express');
const router = Router();

const accountControllers = require('../controllers/account');

router.post('/register', accountControllers.signUp);

module.exports = router;