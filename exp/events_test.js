/* var customEmitter = require("./events_example");

var log = (l)=> console.log(l);

var emit = customEmitter();

// listener
emit.on("data",log);
// .once is to listen only one time of event
emit.once("end",log);
emit.on("message",log);

// always catch error event if your emitter emitting it
emit.on("error",log);
emit.emit("end","Emitting the end directly"); */

var fs = require("fs");
var path = require("path");
var MyEmitter = require("./events_example");
var log = l => console.log(l);
var e = new MyEmitter();

e.on("data", log);
e.start();
setTimeout(() => {
  e.closeChannel();
}, 10000);


var s = fs.createReadStream(path.join(__dirname,"events_example.js"),"utf8");

s.on("open",()=> log("File open for reading"));
s.on("data",log);
s.on("end",()=>log("File reading completed"));
s.on("error",log);
