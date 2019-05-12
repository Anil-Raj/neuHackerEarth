import Compiler from "./Common/Compiler";

export function compilerPostMethod(req: any, res: any) {
    let compiler = new Compiler();
    var output = compiler.compile({code: req.body.code,language: req.body.language},function(response:any){
        res.send(response);
    });
}