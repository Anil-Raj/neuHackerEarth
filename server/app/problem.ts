let jsonFile = "./problems.json";
import * as fs from 'fs';

export function getProblemList(req,res){
    fs.readFile(jsonFile, (err, data) => {
        res.send("JSON.parse(data.toString())");
    })
};
export function problemGetMethod(req, res){
    fs.readFile(jsonFile, (err, data) => {
        res.send("JSON.parse(data.toString()).filter((a:any) => a.id == req.params.id)[0]");
    })
};