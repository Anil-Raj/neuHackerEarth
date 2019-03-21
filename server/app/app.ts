import express from 'express';
import bodyParser from 'body-parser';
import * as compilerRouteHandler from './compilerRouteHandler';
import * as challenges from './challenges';
import * as codearena from './codearena';
import * as problem from './problem';
import * as code from './code'
import * as headers from './headers';
const app = express();

app.use(express.json());
app.use(bodyParser.text({ type: "*/*" }));
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
app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});
