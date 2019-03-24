var util = require('util')
var eventEmitter = require('events').EventEmitter

class MyEvent{
    constructor(){
        eventEmitter.call(this);
    }
    sendEvent = function(type, data) {
        this.emit(type, data)
    }
    
}

util.inherits(MyEvent, eventEmitter)

var eventBus = new MyEvent();
module.exports = {
 emitter : MyEvent,
 eventBus : eventBus
};