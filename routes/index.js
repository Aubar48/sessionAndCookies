var express = require('express');
const indexController = require('../controllers/indexController');
const userValidation = require('../validations/userValidation');
var router = express.Router();

/* GET home page. */
router.get('/',  indexController.index)
router.post('/', userValidation, indexController.indexCreate)


module.exports = router;
