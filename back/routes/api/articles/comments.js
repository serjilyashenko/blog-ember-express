const express = require('express');
const router = express.Router();
const commentsController = require.main.require('../controllers/comments');

router.get('/', commentsController.getAll);
router.get('/:id', commentsController.get);

module.exports = router;
