const jsonFile = "codearena.json";
import * as fs from 'fs';
import Pool from './Pool';
import Compiler from './Compiler';
function getScore(response: any, problemId: number) {
    return 5;
}
let poolList: Pool[] = [];
export function getRing(req, res) {
    let userId = req.params.id;
    let pool = poolList.find(p => p.canAddMore());
    let exist = false;
    poolList.map(p => {
        exist = p.users.some(u => u == userId)
        if (exist) { res.send("" + p.id); return; }
    })
    if (!exist) if (!pool) {
        console.log('creating new pool');
        let newpool = new Pool();
        newpool.addUser(userId);
        poolList.push(newpool);
        res.send("" + newpool.id);
        return;
    } else {
        console.log('adding to same pool');
        pool.addUser(userId);
        const found = poolList.some(el => el.id === pool.id);
        if (!found) poolList.push(pool);
        res.send(pool.id + "");

    }
    console.log(poolList);


};
export function isRingReady(req, res) {
    let userId = req.params.id;
    // if(poolList.length ==0) {res.send("notready");}
    poolList.map(p => {
        let exist = p.users.some(u => u == userId);
        if (exist && !p.canAddMore()) {
            let ringName = "ring" + p.id;
            if (!fs.existsSync("./" + ringName)) {
                fs.mkdirSync("./" + ringName);
            }
            p.users.map(u => {
                if (!fs.existsSync("./" + ringName + "/" + u)) {
                    fs.mkdirSync("./" + ringName + "/" + u);
                }
            });

            res.send("ready:" + p.id);
        }
        else {
            res.send("notready");

        }
    })
};

export function compileUserCode(req, res) {

    let compiler = new Compiler;
    var output = compiler.compile(req, function (response: any) {
        let pool = poolList.find(p => p.id == req.body.poolId);
        if (pool) {
            const users = pool.users.map(u => {
                if (response && u.id == req.body.userId) {
                    return { id: u.id, score: u.score + getScore(response, req.problemId) }
                }
                return u;
            })
            pool.updateUser(users);
        }
        res.send(response);
    });
}