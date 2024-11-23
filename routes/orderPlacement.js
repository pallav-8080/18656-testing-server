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
  let pair = req.params.currencyPair;
  let amount = req.body.amount;
  let price = req.body.price;
  let side = req.params.orderSide;
  if(pair.toLowerCase() == "solusd" && side == "buy" ){
    res.send({
      "id": "1234",
      "market": "SOL/USD",
  		"datetime": "2023-12-31 14:43:15.796000",
  		"type": "0",
  		"price": "28.06",
  		"amount": "35.00000000",
  		"client_order_id": "123456789"
    });
  } else if(pair.toLowerCase() == "fetusd" && side == "buy" ){
    res.send({
      "id": "1236",
      "market": "FET/USD",
      "datetime": "2023-12-31 14:46:15.796000",
      "type": "0",
      "price": "0.4883",
      "amount": "108.00000000",
      "client_order_id": "123456791"
  });
  } else if(pair.toLowerCase() == "dotusd" && side == "sell" && ( amount == "150.0" || amount == 150.0 || amount == 150) ){
    res.send({
      "id": "1235",
      "market": "DOT/USD",
      "datetime": "2023-12-31 14:45:15.796000",
      "type": "0",
      "price": "5.314",
      "amount": "150.00000000",
      "client_order_id": "123456790"
    })
  } else if(pair.toLowerCase() == "dotusd" && side == "sell" && ( amount == "30.0" || amount == 30.0 || amount == 30) ){
    res.send({
      "id": "1249",
      "market": "DOT/USD",
      "datetime": "2023-12-31 14:55:15.796000",
      "type": "0",
      "price": "5.314",
      "amount": "30.00000000",
      "client_order_id": "123456822"
  })
 } else {
    res.send({});
}

});

router.post('/0/private/AddOrder', function(req, res) {
  let d = new Date().toLocaleTimeString();
  let apiName = "Order Place - Kraken";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
  let pair = req.body.pair;
  let amount = req.body.volume;
  let price = req.body.price;
  let side = req.body.type;
  if(side == "sell" && (pair== "XXFETUSD" || pair == "FETUSD")){
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
} else if(side == "sell" && (pair== "XXSOLUSD" || pair == "SOLUSD")){
  res.send({
    "error": [],
    "result": {
        "descr": {
            "order": "sell 35.000000 SOLUSD @ limit 28.22"
        },
        "txid": [
            "OU22CG-KLAF2-FWUDD7"
        ]
    }
  })
} else {
  res.send({});
}
});


router.post('/v2/auth/w/order/submit', function(req, res) {
  const body = req.body;
  let d = new Date().toLocaleTimeString();
  let apiName = "Order Place - Btifinex";
  let logBody = "Body " + "- " + JSON.stringify(req.body);
  let params = "Params " + "- " + JSON.stringify(req.params);
  let log = "----------------------------" + "\n" + d + "\n" + apiName + "\n" + logBody + "\n" + params;
  writeLogToFile(log);
  if((req.body.amount == "150.0" || req.body.amount == 150.0) && req.body.symbol == "tDOTUSD"){
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
} else {
  res.send({});
}
});


module.exports = router;
