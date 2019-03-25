
import * as child_process from 'child_process';
import * as  fs from 'fs';

function makeId(length:number) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

export default class Compiler{
    constructor(){
    }

    compile({code,language}:any,callback:any){
        // console.log(req.body);
        // var body = req.body;
        // var code = body.code;
        // var language = body.language;
        let exec = child_process.exec;
        let fileName: string;
        let inExtension:string;
        let outExtension:string;
        let inPath: string;
        let outPath: string;
        fileName = makeId(5);
        switch (language) {
            case "JS": inPath = './app/code/'; inExtension = '.js'; outPath = './app/code/'; outExtension = 'js'; break;
            default: inPath = '.\\app\\code\\'; inExtension = '.cs';  outPath = ''; outExtension = '.exe'; break;
        }
        if (language == 'JS') {
            fs.writeFile(inPath+fileName+inExtension, code, (err) => {
                exec("node "+inPath+fileName+inExtension, function (err, stdout, stderr) {
                    callback(stdout);
                });
            });
        } else {
            fs.writeFile(inPath+fileName+inExtension, code, (err) => {
                exec("csc "+inPath+fileName+inExtension, function (err, stdout, stderr) {
                    exec(outPath+fileName+outExtension, function (err, stdout, stderr) {
                        callback(stdout);
                    });
                });
            });
        }
    }

}