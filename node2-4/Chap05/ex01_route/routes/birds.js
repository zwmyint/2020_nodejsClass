var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route  
router.get('/', function(req, res) {
  res.send('<h1>Birds home page</h1>');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('<h1>About birds</h1>');
});

module.exports = router;