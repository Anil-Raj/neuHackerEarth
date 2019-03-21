jsonFile = "codearena.json";
var fs = require('fs');


class Pool {

    constructor() {
      this.id = parseInt(Math.random()*100)%10;
      this.users = [];
      this.capacity = 3;
    }
    canAddMore(){
        return this.capacity > this.users.length;
    }
    addUser(userID) {
        if(this.canAddMore()){
            this.users.push(userID);
        }
    }
  
  }

// var Pool = {
//     id:0, 
//     users:[],
//     capacity:2,
//     hasPlace: function(){
//         return this.users.length < this.poolCapacity -1;
//     },
//     addUser:function(userId){
//         if(this.hasPlace()){
//             this.users.push(userId);
//             return this;
//         }
//         return this;
//     }
//   };

// class Pool{
//     constructor(){
//         this.id;
//         this.users=[];
//         this.capacity=3;
//     }
//     hasPlace(){
//         return this.users.length < this.poolCapacity -1;
//     }
//     addUser(userId){
//         if(this.hasPlace()){
//             this.users.push(userId);
//         }
//     }

// }
var poolList = [];
exports.getRing = (req, res) => {
    let userId = req.params.id;
    let pool = poolList.find(p=>p.canAddMore());  
    exist = false;
    poolList.map(p=>{
        exist  = p.users.some(u=>u == userId) 
        if(exist) {res.send(""+p.id);return;}
    })
    if(!exist) if(!pool ){
        console.log('creating new pool'); 
        let newpool = new Pool(); 
        newpool.addUser(userId);
        poolList.push(newpool);
        res.send(""+newpool.id);
        return;
    } else {
        console.log('adding to same pool');
        pool.addUser(userId);
        const found = poolList.some(el => el.id === pool.id);
        if (!found) poolList.push(pool);
       
    }
    console.log(poolList);
    res.send(pool.id+"");
};
exports.isRingReady = (req, res) => {
    let userId = req.params.id;
    // if(poolList.length ==0) {res.send("notready");}
    poolList.map(p=>{
        exist  = p.users.some(u=>u == userId) ;
        if(exist && !p.canAddMore()) {
            ringName="ring"+p.id;
            if (!fs.existsSync("./"+ringName)){
                fs.mkdirSync("./"+ringName);
            }
            p.users.map(u=>{
                if(!fs.existsSync("./"+ringName+"/"+u)){
                    fs.mkdirSync("./"+ringName+"/"+u);
                }
            });
            
            res.send("ready:"+p.id);
        }
        else{
            res.send("notready");

        }
    })
};

// exports.problemGetMethod = (req, res) => {
//     fs.readFile(jsonFile, (err, data) => {
//         console.log(req.param.id, JSON.parse(data).filter(a => a.id == req.params.id)[0]);
//         res.send(JSON.parse(data).filter(a => a.id == req.params.id)[0]);
//     })
// };