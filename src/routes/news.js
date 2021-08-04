const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);

// This path '/' always below
router.get('/', newsController.index);

module.exports = router;
