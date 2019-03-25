import CodeArena from "./CodeArena";
import Compiler from "./compiler";

let codearena = new CodeArena();
export function join_fight(req:any,res:any){
    console.log(req.body);
    let user = req.body.user;
    let pool = codearena.getPool(user);
    res.send(pool);
}
export function compileUserCode(req:any,res:any){
    let compiler = new Compiler();
    let user = req.body.user
    var output = compiler.compile({code:req.cody.code,language:req.body.language,user:user}, (response: any) => {
        console.log(response);
        let pool = codearena.getPool(user);
        if (pool) {
            pool.updateUser({...user,score:user.score + 5});
        }
        res.send({result: response, users:pool.users });
    });
}