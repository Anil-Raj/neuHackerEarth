
var events = require('events');
var emitter = require('./Common/event')

export function handler(socket){
    
            //Create an event handler:
            var myEventHandler = function (message:any) {
                console.log('join_fight',message);                
                socket.emit("join_fight", message);
            }
            //Assign the event handler to an event:
            emitter.eventBus.on('join_fight', myEventHandler);

            //Fire the 'scream' event:
            // eventEmitter.emit('scream');
            socket.on("message", function(message: any) {
              console.log(message);
              socket.emit("message", message);
            });
            socket.on("fight", function(message: any) {
                socket.emit("user", message);
                console.log(message);
                
              });
}