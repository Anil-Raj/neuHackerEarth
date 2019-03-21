"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonFile = "./challengeFile.json";
var fs = __importStar(require("fs"));
var store = { abcd: "./bin/app.js", 1234: "app1.js" };
function getFileName(digest) {
    return store[digest];
}
function getCode(req, res) {
    console.log("getcode");
    console.log(req.body.digest);
    var filename = getFileName(req.body.digest);
    console.log(filename);
    fs.readFile(filename, function (err, data) {
        res.send(data);
    });
}
exports.getCode = getCode;
;
