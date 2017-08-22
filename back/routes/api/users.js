const express = require('express');
const router = express.Router();
const bookmarksRoute = require('./users/bookmarks');
const UsersController = require.main.require('../controllers/users-controller');

const usersController = new UsersController();

router.get('/', usersController.getAll.bind(usersController));
router.post('/', usersController.create.bind(usersController));

router.get('/:id', usersController.get.bind(usersController));
router.put('/:id', usersController.update.bind(usersController));
router.delete('/:id', usersController.destroy.bind(usersController));

router.use('/:id/bookmarks', bookmarksRoute);

module.exports = router;
