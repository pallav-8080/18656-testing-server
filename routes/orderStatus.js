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
/* GET users listing. */
router.post('/', function(req, res) {
  res.send({'id': 1010, 'status':'fulfilled'});
});
router.post('/api/v2/order_status/', function(req, res) {
  let d = new Date().toLocaleTimeString();
  let apiName = "Order Status - BitStamp";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
  res.send({
    "id": 1234,
    "datetime": "2023-01-31 14:45:15",
    "type": "0",
    "status": "Finished",
    "market": "FET/USD",
    "transactions": [
        {
            "tid": "1458532827766784",
            "price": "58.06",
            "{FET}": "22.45",
            "{USD}": "1",
            "fee": "0.00",
            "datetime": "2023-01-31 14:45:15",
            "type": 0
        }
    ],
    "amount_remaining": "0.00",
    "client_order_id": "0.50000000"
  });
});
// TODO
router.post('/0/private/QueryOrders', function(req, res) {
  let d = new Date().toLocaleTimeString();
  let apiName = "Order status - kraken";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
  res.send({
    "error": [],
    "result": {
        "OU22CG-KLAF2-FWUDD7": {
            "refid": "None",
            "userref": 0,
            "status": "closed",
            "reason": null,
            "opentm": 1688665496.7808,
            "closetm": 1688665499.1922,
            "starttm": 0,
            "expiretm": 0,
            "descr": {
                "pair": "FETUSD",
                "type": "sell",
                "ordertype": "market",
                "price": "58.14",
                "price2": "0",
                "leverage": "none",
                "order": "buy 22.45000 FETUSD @ limit 58.14",
                "close": ""
            },
            "vol": "22.4500000",
            "vol_exec": "22.4500000",
            "cost": "1305.243",
            "fee": "0.0",
            "price": "58.14",
            "stopprice": "0.00000",
            "limitprice": "0.00000",
            "misc": "",
            "oflags": "fciq",
            "trigger": "index",
            "trades": [
                "TZX2WP-XSEOP-FP7WYR"
            ]
        }
    }
  });
});

router.post(`/auth/r/order/` + `:currencyPair:` + `:orderId` + `/trades`, function(req, res) {
  let d = new Date().toLocaleTimeString();
  let apiName = "Order Status - Bitfinex";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
  res.send([
    [
      399251013,
      "tDOTUSD",
      1573485493000,
      1747566428,
      150.0,
      5.2529,
      null,
      null,
      1,
      0,
      "USD",
      1234 //CID
    ]
  ]
  );
});

module.exports = router;
