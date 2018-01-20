
var EventEmitter = require("events");

// a simple funtion level event emitter
/*
module.exports = function customEmitter() {
    var emitter = new EventEmitter();
// .emit function of any emitter which send the event name and corrosponding data as second argument.
// you will not catch this one because it will emitted as soon as this function call.
emitter.emit("data","Directly Sending "+ Date.now());

setTimeout(()=> {
    emitter.emit("data","Directly Sending and you will receive it "+ Date.now());
});
    setTimeout(()=> {
        emitter.emit("data","Sending "+ Date.now());
    },1000);
    setTimeout(()=> {
        emitter.emit("data","Sending "+ Date.now());
    },2000);
    setTimeout(()=> {
        emitter.emit("data","Sending "+ Date.now());
    },3000);

    setTimeout(()=> {
        emitter.emit("message","Sending message "+ Date.now());
    },2000);
    setTimeout(()=> {
        emitter.emit("message","Sending  message"+ Date.now());
    },5000);

    setTimeout(()=> {
        emitter.emit("end","Sent all the data");
    },6000);
    // sending error event will break the node app if not catched by listener
    setTimeout(()=> {
        emitter.emit("error",new Error("Sending error"));
    },3000);



    return emitter;
}*/

module.exports= class MyEmitter extends EventEmitter {
    constructor() {
        super();
        this.intervalId=null;
       
    }

    start() {
        this.intervalId = setInterval(()=>{
            this.emit("data","Sending: "+Date.now().toString());
        },1000);
    }

    closeChannel() {
        this.emit("end","Connection closed");
        clearInterval(this.intervalId);
    }
}