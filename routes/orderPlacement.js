var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
  console.log(global.io);

  const body = req.body;
  console.log(body);
  res.send({ title: 'placed' });
});

router.post('/api/v2/orderSide/market/currencyPair', function(req, res) {
  console.log(global.io);

  const body = req.body;
  console.log(body);
  res.send({
    "id": "1234",
    "market": "FET/USD",
    "datetime": "2023-12-31 14:43:15.796000",
    "type": "0",
    "price": "22.45",
    "amount": "58.06000000",
    "client_order_id": "123456789"
  });
});

router.get('/0/private/AddOrder', function(req, res) {
  console.log(global.io);
  const body = req.body;
  console.log(body);
  res.send({
    "error": [],
    "result": {
        "descr": {
            "order": "sell 22.450000 FETUSD @ limit 58.14"
        },
        "txid": [
            "OU22CG-KLAF2-FWUDD7"
        ]
    }
  });
});

// TODO
router.post('/v2/auth/w/order/submit', function(req, res) {
  console.log(global.io);
  const body = req.body;
  console.log(body);
  res.send({
    "error": [],
    "result": {
        "descr": {
            "order": "sell 22.450000 FETUSD @ limit 58.14"
        },
        "txid": [
            "OU22CG-KLAF2-FWUDD7"
        ]
    }
  });
});


module.exports = router;
