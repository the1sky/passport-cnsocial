var express = require('express');
var router = express.Router();
var passport = require('../index');

/* GET home page. */

router.get('/', function(req, res) {
  passport.start( req,res );
  res.render('index', { title: 'Express' });
});

module.exports = router;
