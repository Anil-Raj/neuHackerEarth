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
function getAll(req, res) {
    fs.readFile(jsonFile, function (err, data) {
        if (data) {
            res.send(JSON.parse(data.toString()));
        }
    });
}
exports.getAll = getAll;
;
function problemGetMethod(req, res) {
    fs.readFile(jsonFile, function (err, data) {
        console.log(req.param.id, data);
        res.send(JSON.parse(data.toString()).filter(function (p) { return p.id == req.params.id; }));
    });
}
exports.problemGetMethod = problemGetMethod;
;
