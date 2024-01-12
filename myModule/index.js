let app1 = require("./app1");
let app2 = require("./app2");
let app3 = require("./app3");

exports.morning = app2.morning; //export function
exports.lunch = app3.lunch; //export function
exports.midNight = app1.midNight; //export function
