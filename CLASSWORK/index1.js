// (function(__dirname,__filename,exports,path,module,this){
// let name="harry";
// console.log(name);
// })();   //require("./m1")


// (function(){
// let name="garry";
// console.log(name);
// })();

//async
// const crypto=require("crypto");
// const BeforeExe=Date.now();
// crypto.pbkdf2("passwordjnijklojjj","salt",100000,512,"sha512",() => {
//     crypto.pbkdf2("password","salt",100000,512,"sha512",() => {
//           crypto.pbkdf2("password","salt",100000,512,"sha512", () => {
// console.log(Date.now()-BeforeExe);
//       });
//    });
// });

const event = require("events");

const EventEmitter  = new event.EventEmitter();
const eventhandler=(extra_cheese,olive)=>{
 console.log("Start preparing pizza");
 console.log(`Extra cheese: ${extra_cheese}`);
    console.log(`Olive: ${olive}`);
};
EventEmitter.on("order pizza", () => {
    console.log("Order received");
});
EventEmitter.on("order pizza", eventhandler);
EventEmitter.emit("order pizza");


