var express = require('express');
var router = express.Router();

/* GET Spices page. */
router.get('/', function(req, res, next) {
  res.render('spices', { title: 'Search Results - Spices' });
});

module.exports = router;
