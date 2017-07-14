const express = require('express');
const router = express.Router();
const userRouter = require('./api/users');
const articlesRouter = require('./api/articles');
const bookmarksRouter = require('./api/bookmarks');

router.use('/users', userRouter);
router.use('/articles', articlesRouter);
router.use('/bookmarks', bookmarksRouter);

module.exports = router;
