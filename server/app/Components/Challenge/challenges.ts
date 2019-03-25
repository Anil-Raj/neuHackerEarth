const jsonFile = "./app/assets/challengeFile.json";
import * as  fs from 'fs';

export function getAll(req:any, res:any){
    fs.readFile(jsonFile, (err, data) => {
        if(data){
            res.send(JSON.parse(data.toString()));
        }
    })
};
export function problemGetMethod(req:any, res:any){
    fs.readFile(jsonFile, (err, data) => {
        console.log(req.param.id, data);
        res.send(JSON.parse(data.toString()).filter((p:any)=>p.id == req.params.id));
    })
};