var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  console.log(global.io);

  const body = req.body;
  console.log(body);
  res.send({ title: 'placed' });
});


module.exports = router;
