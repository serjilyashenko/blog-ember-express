const express = require('express');
const router = express.Router();
const commentsRouter = require('./articles/comments');
const BaseController = require.main.require('../controllers/base-controller');

const MODEL_NAME = 'article';

const articlesController = new BaseController(MODEL_NAME);

router.get('/', articlesController.getAll.bind(articlesController));
router.post('/', articlesController.create.bind(articlesController));

router.get('/:id', articlesController.get.bind(articlesController));
router.put('/:id', articlesController.update.bind(articlesController));
router.delete('/:id', articlesController.destroy.bind(articlesController));

router.use('/:id/comments', commentsRouter);

module.exports = router;
