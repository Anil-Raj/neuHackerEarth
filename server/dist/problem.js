"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonFile = "./problems.json";
var fs = __importStar(require("fs"));
function getProblemList(req, res) {
    fs.readFile(jsonFile, function (err, data) {
        res.send("JSON.parse(data.toString())");
    });
}
exports.getProblemList = getProblemList;
;
function problemGetMethod(req, res) {
    fs.readFile(jsonFile, function (err, data) {
        res.send("JSON.parse(data.toString()).filter((a:any) => a.id == req.params.id)[0]");
    });
}
exports.problemGetMethod = problemGetMethod;
;
