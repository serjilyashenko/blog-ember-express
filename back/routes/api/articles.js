const express = require('express');
const router = express.Router();
const commentsRouter = require('./articles/comments');
const articlesController = require.main.require('../controllers/articles');

router.get('/', articlesController.getAll);
router.post('/', articlesController.create);

router.get('/:id', articlesController.get);
router.put('/:id', articlesController.update);
router.delete('/:id', articlesController.destroy);

router.use('/:id/comments', commentsRouter);

module.exports = router;
