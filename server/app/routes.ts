
import * as compilerRouteHandler from './Components/Compiler/compilerRouteHandler';
import * as challenges from './Components/Challenge/challenges';
import * as codearena from './Components/CodeArena/codearenaHandler';
import * as problem from './Components/Problem/problem';
import * as code from './Components/CodeStore/code';
import * as express from 'express';

export function handler(app:express.Application){
    app.get('/problems', problem.getProblemList);
    app.get('/problems/:id', problem.problemGetMethod);
    app.post('/compile', compilerRouteHandler.compilerPostMethod);
    app.get('/challenges', challenges.getAll);
    app.post('/codearena/join_fight', codearena.join_fight);
    // this.app.get('/codearena/isRingReady/:id', codearena.isRingReady);
    app.post('/codearena/compile', codearena.compileUserCode);
    app.post('/code', code.getCode);

}