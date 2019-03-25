import Compiler from "./Compiler";
import Pool from "./Pool";
import events = require("events");

export default class CodeArena {
    private poolList: Pool[] = [];
    constructor() {
    }
    getPool(user: any) {
        let pool = this.poolList.find(p => p.users.some(u => u.id == user.id));
        console.log(pool);
        
        //if a pool exist which already has the user
         if(!pool) {
            // if pool has space add user and return pool
            if (this.poolList.find(p => p.canAddMore())) {
                this.poolList = this.poolList.map(p=>{
                    if(p.canAddMore()){
                        p.addUser(user);
                        pool = p;
                    }
                    return p;
                })
            } else {  //crate new pool add user and return the pool
                pool = new Pool();
                pool.addUser(user);
                this.poolList.push(pool);
            }
        }
        console.log('pooool');
        console.log(pool);
        
        
        if(pool && pool.users.length == 2){
            console.log('pool ready');
            var eventEmitter = new events.EventEmitter();

            var emitter = require('./event')
            //Fire the 'scream' event:
            emitter.eventBus.sendEvent('join_fight',pool);
           
        }
        return pool;

       
    }
    getUserCodeSubmitResponse(user:any,load:any){
        let compiler = new Compiler();
        var output = compiler.compile({code:load.code,language:load.language}, (response: any) => {
            console.log(response);
            let pool = this.getPool(user);
            if (pool) {
                pool.updateUser({...user,score:user.score + 5});
            }
            return { result: response, user:user };
        });
    }
    
}