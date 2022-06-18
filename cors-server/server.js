const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//---------------------real time -----------------------------
const {
  rtConnect,
  rtSubscribe,
  rtUnsubscribe,
  rtFeed,
  historical,
  formatTime,
} = require("truedata-nodejs");
const fs = require("fs");
const user = "wssand037";
const pwd = "jashan037";
const port = 8082;
//const symbols = ["NIFTY BANK"];
//var dataToSend = { touchline: "", tick: "", bidask: "", bar: "" };
//var touchLineData;
//rtConnect(user, pwd, symbols, port);
//rtFeed.on("touchline", touchlineHandler);
//rtFeed.on("tick", tickHandler);
//rtFeed.on("bidask", bidaskHandler);
//rtFeed.on("bar", barHandler);

//function touchlineHandler(touchline) {
//  //dataToSend = { ...dataToSend, touchline };
//  touchLineData = touchline;
//  console.log(touchLineData);
//}
//function tickHandler(tick) {
//  dataToSend = { ...dataToSend, tick };
//  console.log(dataToSend);
//}
//function bidaskHandler(bidask) {
//  dataToSend = { ...dataToSend, bidask };
//  console.log(dataToSend);
//}
//function barHandler(bar) {
//  dataToSend = { ...dataToSend, bar };
//  console.log(dataToSend);
//}

//--------historical--------------
historical.auth(user, pwd); // For authentication

const from = formatTime(2022, 8, 1, 9, 15); // (year, month, date, hour, minute) // hour in 24 hour format
const to = formatTime(2022, 8, 1, 10, 15); // (year, month, date, hour, minute) // hour in 24 hour format
let interval;
let response;
let getSymbolId;
let duration;
let bidask;
//historical
//  .getBarData(
//    "RELIANCE",
//    "210302T09:00:00",
//    "210302T15:30:00",
//    (interval = "1min"),
//    (response = "json"),
//    (getSymbolId = 0)
//  )
//  .then((res) => console.log(res))
//  .catch((err) => console.log(err));

//historical
//  .getBarData(
//    "NIFTY 50",
//    (duration = "1W"),
//    (interval = "60min"),
//    (response = "json"),
//    (getSymbolId = 0)
//  )
//  .then((res) => console.log(res))
//  .catch((err) => console.log(err));

//historical
//  .getTickData(
//    "SBIN",
//    "1D",
//    (bidask = 1),
//    (response = "json"),
//    (getSymbolId = 0)
//  )
//  .then((res) => console.log(res))
//  .catch((err) => console.log(err));

//historical
//  .getLTP("L&TFH")
//  .then((res) => console.log(res))
//  .catch((err) => console.log(err));

// routes
//app.post("/optionchain", (req, res) => {
//  res.send(touchLineData);
//});
app.post("/historical", async (req, res) => {
  await historical
    .getBarData(
      "RELIANCE",
      from,
      to,
      (interval = "15min"),
      (response = "json"),
      (getSymbolId = 0)
    )
    .then((response) => {
      //console.log(response);
      res.send(response.Records);
    })
    .catch((err) => console.log(err));
});
app.listen(4000, (err) => {
  if (err) console.log(err);
  console.log(`server is running at 4000`);
});
