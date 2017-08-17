const express = require('express');
const router = express.Router();
const userRouter = require('./api/users');
const articlesRouter = require('./api/articles');
const SessionsController = require.main.require('../controllers/sessions-controller');

router.use('/users', userRouter);
router.use('/articles', articlesRouter);

const sessionsController = new SessionsController();

router.post('/sessions', sessionsController.create.bind(sessionsController));

module.exports = router;
