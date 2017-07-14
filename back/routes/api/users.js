const express = require('express');
const router = express.Router();
const BaseController = require.main.require('../controllers/base-controller');

const MODEL_NAME = 'user';

const usersController = new BaseController(MODEL_NAME);

router.get('/', usersController.getAll.bind(usersController));
router.post('/', usersController.create.bind(usersController));

router.get('/:id', usersController.get.bind(usersController));
router.put('/:id', usersController.update.bind(usersController));
router.delete('/:id', usersController.destroy.bind(usersController));

module.exports = router;
