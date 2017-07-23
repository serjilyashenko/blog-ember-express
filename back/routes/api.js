const express = require('express');
const router = express.Router();
const userRouter = require('./api/users');
const articlesRouter = require('./api/articles');

router.use('/users', userRouter);
router.use('/articles', articlesRouter);

module.exports = router;
