// var fs = require('fs');
import fs from 'fs';
import child_process from 'child_process';
import compiler from './Compiler'; 
import Compiler from './Compiler';

export function compilerPostMethod(req: any, res: any) {
    let compiler = new Compiler;
    var output = compiler.compile(req,function(response:any){
        res.send(response);
    });
}