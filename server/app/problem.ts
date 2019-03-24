let jsonFile = "./assets/problems.json";
import * as fs from 'fs';

export function getProblemList(req,res){
    fs.readFile(jsonFile, (err, data) => {
        res.send(data);
    })
};
export function problemGetMethod(req, res){
    fs.readFile(jsonFile, (err, data) => {
        // res.send(data.filter((a:any) => a.id == req.params.id)[0]);
        res.send(data);
    })
};