const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);

// This path '/' always below
router.use('/', newsController.index);

module.exports = router;
