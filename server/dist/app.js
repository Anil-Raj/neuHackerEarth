"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var compilerRouteHandler = __importStar(require("./compilerRouteHandler"));
var challenges = __importStar(require("./challenges"));
var codearena = __importStar(require("./codearena"));
var problem = __importStar(require("./problem"));
var code = __importStar(require("./code"));
var headers = __importStar(require("./headers"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(body_parser_1.default.text({ type: "*/*" }));
app.use(headers.cors);
app.get('/problems', problem.getProblemList);
app.get('/problems/:id', problem.problemGetMethod);
app.post('/compile', compilerRouteHandler.compilerPostMethod);
app.get('/challenges', challenges.getAll);
app.get('/codearena/ring/:id', codearena.getRing);
app.get('/codearena/isRingReady/:id', codearena.isRingReady);
app.post('/codearena/ring', codearena.compileUserCode);
app.post('/code', code.getCode);
// listen for requests
app.listen(3030, function () {
    console.log("Server is listening on port 3030");
});
