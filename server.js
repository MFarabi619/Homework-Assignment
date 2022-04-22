const express = require("express");
const app = express();
// const url =
//   "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin%2Ctether%2Csolanacardano%2Cavaterra&vs_currencies=cad";

var request = require("request");

var url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano%2Cavaterra&vs_currencies=cad";

app.get("/", function (req, res) {
  console.log("Running");
  res.send("This works");
  // console.log(url);
});

app.listen(3000);

request(
  {
    url: url,
    json: true,
  },
  function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body); // Print the json response
    }
  }
);

//bitcoin,litecoin,ethereum,dogecoin,tether,solana,cardano,avaterra
