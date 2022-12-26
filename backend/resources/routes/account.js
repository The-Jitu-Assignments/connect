const { Router } = require('express');
const { verifyToken } = require('../../middleware/verifyToken');
const router = Router();

const accountControllers = require('../controllers/account');

router.post('/register', accountControllers.signUp);
router.post('/login', accountControllers.login);
router.post('/sendRequest', verifyToken, accountControllers.sendAConnectionRequest);
router.put('/acceptOrDecline/:connectionId', verifyToken, accountControllers.acceptOrDeclineConnectionRequest);

module.exports = router;