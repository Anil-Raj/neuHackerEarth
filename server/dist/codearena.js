"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonFile = "codearena.json";
var fs = __importStar(require("fs"));
var Pool_1 = __importDefault(require("./Pool"));
var Compiler_1 = __importDefault(require("./Compiler"));
var poolList = [];
function getRing(req, res) {
    var userId = req.params.id;
    var pool = poolList.find(function (p) { return p.canAddMore(); });
    var exist = false;
    poolList.map(function (p) {
        exist = p.users.some(function (u) { return u == userId; });
        if (exist) {
            res.send("" + p.id);
            return;
        }
    });
    if (!exist)
        if (!pool) {
            console.log('creating new pool');
            var newpool = new Pool_1.default();
            newpool.addUser(userId);
            poolList.push(newpool);
            res.send("" + newpool.id);
            return;
        }
        else {
            console.log('adding to same pool');
            pool.addUser(userId);
            var found = poolList.some(function (el) { return el.id === pool.id; });
            if (!found)
                poolList.push(pool);
            res.send(pool.id + "");
        }
    console.log(poolList);
}
exports.getRing = getRing;
;
function isRingReady(req, res) {
    var userId = req.params.id;
    // if(poolList.length ==0) {res.send("notready");}
    poolList.map(function (p) {
        var exist = p.users.some(function (u) { return u == userId; });
        if (exist && !p.canAddMore()) {
            var ringName_1 = "ring" + p.id;
            if (!fs.existsSync("./" + ringName_1)) {
                fs.mkdirSync("./" + ringName_1);
            }
            p.users.map(function (u) {
                if (!fs.existsSync("./" + ringName_1 + "/" + u)) {
                    fs.mkdirSync("./" + ringName_1 + "/" + u);
                }
            });
            res.send("ready:" + p.id);
        }
        else {
            res.send("notready");
        }
    });
}
exports.isRingReady = isRingReady;
;
function compileUserCode(req, res) {
    var compiler = new Compiler_1.default;
    var output = compiler.compile(req, function (response) {
        console.log(response);
        console.log(poolList);
        var pool = poolList.find(function (p) { return p.id == req.params.poolId; });
        if (pool) {
            var users = pool.users.map(function (u) {
                if (response && u.id == req.body.userId) {
                    return { id: u.id, score: u.score + 5 };
                }
                console.log(u.id, u.score);
                return u;
            });
            pool.updateUser(users);
        }
        console.log(pool);
        res.send(response);
    });
}
exports.compileUserCode = compileUserCode;
