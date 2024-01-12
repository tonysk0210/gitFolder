function morning() {
  console.log("Good morning!!!");
}

function evening() {
  console.log("Good evening!!!");
}

module.exports.morning = morning; // this is for app.js using app2.js function
module.exports.evening = evening;
