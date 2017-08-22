const express = require('express');
const router = express.Router();
const BookmarksController = require.main.require('../controllers/bookmarks-controller');

const bookmarkController = new BookmarksController();

router.get('/', bookmarkController.getAll.bind(bookmarkController));
router.post('/', bookmarkController.create.bind(bookmarkController));

router.get('/:id', bookmarkController.get.bind(bookmarkController));
router.put('/:id', bookmarkController.update.bind(bookmarkController));
router.delete('/:id', bookmarkController.destroy.bind(bookmarkController));

module.exports = router;
