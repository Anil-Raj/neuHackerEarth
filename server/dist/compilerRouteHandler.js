"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Compiler_1 = __importDefault(require("./Compiler"));
function compilerPostMethod(req, res) {
    var compiler = new Compiler_1.default;
    var output = compiler.compile(req, function (response) {
        res.send(response);
    });
}
exports.compilerPostMethod = compilerPostMethod;
