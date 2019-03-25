var util = require('util')
var eventEmitter = require('events').EventEmitter

class ServerEvent{
    constructor(){
        eventEmitter.call(this);
    }
    sendEvent = function(type, data) {
        this.emit(type, data)
    }
    
}

util.inherits(ServerEvent, eventEmitter)

var eventBus = new ServerEvent();
module.exports = {
 emitter : ServerEvent,
 eventBus : eventBus
};