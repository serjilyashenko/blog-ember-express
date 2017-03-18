const express = require('express');
const router = express.Router();
const CommentsController = require.main.require('../controllers/comments-controller');

const MODEL_NAME = 'comment';

const commentsController = new CommentsController(MODEL_NAME);

router.get('/', commentsController.getAll.bind(commentsController));
router.post('/', commentsController.create.bind(commentsController));

router.get('/:id', commentsController.get.bind(commentsController));
router.put('/:id', commentsController.update.bind(commentsController));
router.delete('/:id', commentsController.destroy.bind(commentsController));

module.exports = router;
