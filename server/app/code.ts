const jsonFile = "./challengeFile.json";
import * as  fs from 'fs';

type FileDigest = { [key: string]: string };
const store: FileDigest = { abcd: "./bin/app.js", 1234: "app1.js" };

function getFileName(digest: any) {
    return store[digest];
}
export function getCode(req: any, res: any) {
    console.log("getcode");
    console.log(req.body.digest);
    
    const filename = getFileName(req.body.digest);
    console.log(filename);
    
    fs.readFile(filename, (err, data) => {
            res.send(data);
    })
};