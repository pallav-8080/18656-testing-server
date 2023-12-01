var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  res.send({'id': 1010, 'status':'fulfilled'});
});

module.exports = router;
