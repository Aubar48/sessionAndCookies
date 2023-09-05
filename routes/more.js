var express = require('express');
const moreController = require('../controllers/moreController');
var router = express.Router();
router.get('/', moreController.more)
router.get('/logut', moreController.logout)
module.exports = router