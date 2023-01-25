var express = require('express');
var router = express.Router();
var cool = require('cool-ascii-faces');


/* GET home page. */
router.get('/', function(req, res, next) {
  var randomFace = cool();
  console.log(randomFace);
  res.render('mejoras', { title: 'Hotel JMCA', face: randomFace });
});

module.exports = router;
