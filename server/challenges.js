jsonFile = "challengeFile.json";
var fs = require('fs');

exports.getAll = (req, res) => {
    fs.readFile(jsonFile, (err, data) => {
        res.send(JSON.parse(data));
    })
};
exports.problemGetMethod = (req, res) => {
    fs.readFile(jsonFile, (err, data) => {
        console.log(req.param.id, JSON.parse(data).filter(a => a.id == req.params.id)[0]);
        res.send(JSON.parse(data).filter(a => a.id == req.params.id)[0]);
    })
};