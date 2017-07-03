const express = require('express');
const router = express.Router();
const articlesRouter = require('./api/articles');
const bookmarksRouter = require('./api/bookmarks');

router.use('/articles', articlesRouter);
router.use('/bookmarks', bookmarksRouter);

module.exports = router;
