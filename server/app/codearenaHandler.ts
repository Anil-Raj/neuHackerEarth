import CodeArena from "./CodeArena";

// const jsonFile = "codearena.json";
// import * as fs from 'fs';
// import Pool from './Pool';
// import Compiler from './Compiler';
// import User from './User';
// function getScore(response: any, problemId: number) {
//     return 5;
// }
// let poolList: Pool[] = [];
// let userList: User[] = [new User(1,"https://he-s3.s3.amazonaws.com/media/avatars/anilraj659/resized/50/photo.jpg","anilraj659"),new User(2,"","sidraj")]
// export function getRing(req, res) {
//     let userId = req.params.id;
//     let pool = poolList.find(p => p.canAddMore());
//     let exist = false;
//     poolList.map(p => {
//         exist = p.users.some(u => u.id == userId)
//         if(exist && !p.canAddMore()){
//             res.send(p.users);
//         }else if (exist) { res.send("" + p.id); return; }
//     })
//     if (!exist) if (!pool) {
//         console.log('creating new pool');
//         let newpool = new Pool();
//         newpool.addUser(userList.find(u=>u.id == userId));
//         poolList.push(newpool);
//         res.send(newpool);
//         return;
//     } else {
//         console.log('adding to same pool');
//         pool.addUser(userId);
//         const found = poolList.some(el => el.id === pool.id);
//         if (!found) poolList.push(pool);
//         res.send(pool.id);

//     }
//     io.emit('message', req.body);
//     console.log(JSON.stringify(poolList));


// };
// export function isRingReady(req, res) {
//     let userId = req.params.id;
//     // if(poolList.length ==0) {res.send("notready");}
//     poolList.map(p => {
//         let exist = p.users.some(u => u == userId);
//         if (exist && !p.canAddMore()) {
//             let ringName = "ring" + p.id;
//             if (!fs.existsSync("./" + ringName)) {
//                 fs.mkdirSync("./" + ringName);
//             }
//             p.users.map(u => {
//                 if (!fs.existsSync("./" + ringName + "/" + u)) {
//                     fs.mkdirSync("./" + ringName + "/" + u);
//                 }
//             });

//             res.send("ready:" + p.id);
//         }
//         else {
//             res.send("notready");

//         }
//     })
// };

// export function compileUserCode(req, res) {

//     let compiler = new Compiler();
//     var output = compiler.compile(req, function (response: any) {
//         console.log(response);
//         let pool = poolList.find(p => p.id == req.body.poolId);
//         if (pool) {
//             const users = pool.users.map(u => {
//                 if (response && u.id == req.body.userId) {
//                     return { id: u.id, score: u.score + getScore(response, req.problemId) }
//                 }
//                 return u;
//             })
//             pool.updateUser(users);
//         }
//         console.log(response);
//         res.send({result:response,pool:pool});
//     });
// }
let codearena = new CodeArena();
export function join_fight(req:any,res:any){
    console.log(req.body);
    let user = req.body.user;
    let pool = codearena.getPool(user);
    res.send(pool);
}
export function compileUserCode(req:any,res:any){

}