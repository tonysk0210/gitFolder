let app2 = require("./app2");
let app3 = require("./app3");

app2.morning(); //Good morning!!!
app3.lunch(); //Lunch time now !!!
app2.evening(); //Good evening!!!s

function midNight() {
  console.log("Mid night!!!");
}

module.exports.midNight = midNight; //export function
