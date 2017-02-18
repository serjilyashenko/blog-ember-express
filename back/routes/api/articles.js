const express = require('express');
const router = express.Router();
const commentsRouter = require('./articles/comments');
const articlesController = require.main.require('../controllers/articles');

router.get('/', articlesController.getAll);
router.get('/:id', articlesController.get);

router.use('/:id/comments', commentsRouter);

module.exports = router;
