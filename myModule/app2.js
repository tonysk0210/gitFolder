// let name = 10;
// console.log(name);

function morning() {
  console.log("Good morning!!!");
}

function evening() {
  console.log("Good evening!!!");
}
// console.log(module.exports); //{}
module.exports.morning = morning; // this is for app.js using app2.js function
module.exports.evening = evening;
