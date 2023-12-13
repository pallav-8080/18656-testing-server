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
  let id = req.body.id;
 if(id == 1234){
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
  } else if(id == 1235) {
    res.send({
      "id": 1235,
      "datetime": "2023-01-31 14:48:15",
      "type": "0",
      "status": "Finished",
      "market": "DOT/USD",
      "transactions": [
          {
              "tid": 1458532827766789,
              "price": "5.314",
              "{DOT}": "120.00",
              "{USD}": "1",
              "fee": "0.00",
              "datetime": "2023-01-31 14:48:24",
              "type": 0
          }
      ],
      "amount_remaining": "30.00",
      "client_order_id": "24560700000"
    })
  } else if(id == 1236){
    res.send(
      {
        "id": 1236,
        "datetime": "2023-01-31 14:49:15",
        "type": "0",
        "status": "Finished",
        "market": "FET/USD",
        "transactions": [
            {
                "tid": 1458532827766799,
                "price": "0.4883",
                "{FET}": "108.00",
                "{USD}": "1",
                "fee": "0.00",
                "datetime": "2023-01-31 14:49:24",
                "type": 0
            }
        ],
        "amount_remaining": "0.00",
        "client_order_id": "3678000000"
    })
  } else if(id== 1249){
    res.send({
      "id": 1249,
      "datetime": "2023-01-31 14:58:15",
      "type": "0",
      "status": "Finished",
      "market": "DOT/USD",
      "transactions": [
          {
              "tid": 1458532827766795,
              "price": "5.314",
              "{DOT}": "30.00",
              "{USD}": "1",
              "fee": "0.00",
              "datetime": "2023-01-31 14:58:24",
              "type": 0
          }
      ],
      "amount_remaining": "00.00",
      "client_order_id": "24560700023"
  });
  } else {
    res.send({});
  }
});
// TODO
router.post('/0/private/QueryOrders', function(req, res) {
  let d = new Date().toLocaleTimeString();
  let apiName = "Order status - kraken";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
  let id = req.body.txid;

  if(id == "OU22CG-KLAF2-FWUDD7"){
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
} else if(id== "OU22CG-KLAF2-FWUDD8"){
  res.send({
    "error": [],
    "result": {
        "OU22CG-KLAF2-FWUDD7": {
            "refid": "None",
            "userref": 0,
            "status": "expired",
            "reason": null,
            "opentm": 1688665496.7808,
            "closetm": 1688665501.1922,
            "starttm": 0,
            "expiretm": 0,
            "descr": {
                "pair": "FETUSD",
                "type": "sell",
                "ordertype": "market",
                "price": "0.5482",
                "price2": "0",
                "leverage": "none",
                "order": "sell 108 FETUSD @ limit 0.5482",
                "close": ""
            },
            "vol": "108.00",
            "vol_exec": "0.0",
            "cost": "0.0",
            "fee": "0.0",
            "price": "0.5482",
            "stopprice": "0.00000",
            "limitprice": "0.00000",
            "misc": "",
            "oflags": "fciq",
            "trigger": "index",
            "trades": []
        }
    }
})
} else {
  res.send({})
}
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
