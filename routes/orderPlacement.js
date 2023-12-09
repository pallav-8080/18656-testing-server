var express = require('express');
var router = express.Router();
const fs = require('fs');

// Function to write logs to a text file
function writeLogToFile(logData) {
  const fileName = 'logs.txt';

  // Append the log to the file
  fs.appendFile(fileName, logData + '\n', (err) => {
    if (err) throw err;
    console.log('Log saved to ' + fileName);
  });
}
/* GET home page. */
router.post('/', function(req, res) {
  console.log(global.io);

  const body = req.body;
  console.log(body);
  res.send({ title: 'placed' });
});

router.post(`/api/v2/` + `:orderSide` + `/market/` + `:currencyPair`, function(req, res) {
  let d = new Date().toLocaleTimeString();
  let apiName = "Order Place - BitStamp";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
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

router.post('/0/private/AddOrder', function(req, res) {
  let d = new Date().toLocaleTimeString();
  let apiName = "Order Place - Kraken";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
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

router.post('/v2/auth/w/order/submit', function(req, res) {
  const body = req.body;
  let d = new Date().toLocaleTimeString();
  let apiName = "Order Place - Btifinex";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
  res.send([
    1641007395796,
    "on-req",
    12345,
    null,
    [
      [
        1747566428,
        null,
        1678987199446,
        "tDOTUSD",
        1641007395796,
        1641007395798,
       150.0,
        150.0,
        "MARKET",
        null,
        null,
        null,
        0,
        "ACTIVE",
        null,
        null,
        5.2529,
        0,
        0,
        0,
        null,
        null,
        null,
        0,
        0,
         null,
        null,
        null,
        "API>BFX",
        null,
        null,
        null
      ]
    ],
    null,
    "SUCCESS",
    "Submitting exchange market buy order for 150 DOT."
  ]);
});


module.exports = router;
