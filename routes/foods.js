var express = require('express');
var router = express.Router();

var foodsCtrl = require('../controllers/foods')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('/foods');
});

//Alkaline Foods form page
//router.post('/', foodsCtrl.create)



module.exports = router;
