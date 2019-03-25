import compiler from './Compiler'; 
import Compiler from './Compiler';

export function compilerPostMethod(req: any, res: any) {
    let compiler = new Compiler();
    var output = compiler.compile({code: req.body.code,language: req.body.code},function(response:any){
        res.send(response);
    });
}