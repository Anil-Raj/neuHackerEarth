let jsonFile = "./app/assets/problem.json";
import * as fs from 'fs';

export function getProblemList(req,res){
    fs.readFile(jsonFile, (err, data) => {
        console.log(err,data);
        
        res.send(JSON.parse(data));
    })
};
export function problemGetMethod(req, res){
    fs.readFile(jsonFile, (err, data) => {
        res.send(JSON.parse(data).filter((a:any) => a.id == req.params.id)[0]);
    })
};