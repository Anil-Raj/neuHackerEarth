const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
jsonFile = "temp.json";
challengeFile = 'challengeFile.json'
problemFile = 'problem.json'

const app = express();
app.use(bodyParser.text({ type: "*/*" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => {
  fs.readFile(jsonFile, (err, data) => {
    res.send(JSON.parse(data));
  });


});
app.get('/challenges', (req, res) => {
  fs.readFile(challengeFile, (err, data) => {
    res.send(JSON.parse(data));
  });


});
app.get('/problem/?:id', (req, res) => {
  console.log(req.params.id);
  
  fs.readFile(problemFile, (err, data) => {
    res.send(JSON.parse(data).filter(item=> item.id == req.params.id));
  });


});
app.post('/', function (req, res) {
  console.log(req.body);
  fs.writeFile('./bin/app.js', JSON.parse(req.body).code, function (err, data) {
    var exec = require('child_process').exec;
    exec("node ./bin/app.js", function (err, stdout, stderr) {
      res.send(stdout);
    });
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
});


// listen for requests
app.listen(3030, () => {
  console.log("Server is listening on port 3030");
});
