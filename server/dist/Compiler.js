"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = __importDefault(require("child_process"));
var fs_1 = __importDefault(require("fs"));
function makeId(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
var Compiler = /** @class */ (function () {
    function Compiler() {
    }
    Compiler.prototype.compile = function (req, callback) {
        // console.log(req.body);
        var body = req.body;
        var exec = child_process_1.default.exec;
        var fileName;
        var inExtension;
        var outExtension;
        var inPath;
        var outPath;
        fileName = makeId(5);
        switch (body.language) {
            case "JS":
                inPath = './app/code/';
                inExtension = '.js';
                outPath = './app/code/';
                outExtension = 'js';
                break;
            default:
                inPath = '.\\app\\code\\';
                inExtension = '.cs';
                outPath = '';
                outExtension = '.exe';
                break;
        }
        if (body.language == 'JS') {
            fs_1.default.writeFile(inPath + fileName + inExtension, body.code, function (err) {
                exec("node " + inPath + fileName + inExtension, function (err, stdout, stderr) {
                    callback(stdout);
                });
            });
        }
        else {
            fs_1.default.writeFile(inPath + fileName + inExtension, body.code, function (err) {
                exec("csc " + inPath + fileName + inExtension, function (err, stdout, stderr) {
                    exec(outPath + fileName + outExtension, function (err, stdout, stderr) {
                        callback(stdout);
                    });
                });
            });
        }
    };
    return Compiler;
}());
exports.default = Compiler;
