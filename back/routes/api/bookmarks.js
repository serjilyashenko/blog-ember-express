const express = require('express');
const router = express.Router();
const BaseController = require.main.require('../controllers/base-controller');

const MODEL_NAME = 'bookmark';

const bookmarkController = new BaseController(MODEL_NAME);

router.get('/', bookmarkController.getAll.bind(bookmarkController));
router.post('/', bookmarkController.create.bind(bookmarkController));

router.get('/:id', bookmarkController.get.bind(bookmarkController));
router.put('/:id', bookmarkController.update.bind(bookmarkController));
router.delete('/:id', bookmarkController.destroy.bind(bookmarkController));

module.exports = router;
