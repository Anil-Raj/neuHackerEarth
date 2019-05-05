
import * as compilerRouteHandler from './compilerRouteHandler';
import * as express from 'express';

export function handler(app:express.Application){
    app.post('/compile', compilerRouteHandler.compilerPostMethod);

}