const express = require('express');
const router = express.Router();
const articles = require('./api/articles');

router.get('/', function (req, res) {
    res.json({api: 'hello world'});
});

router.use('/articles', articles);

module.exports = router;
