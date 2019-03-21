const express = require('express');
const bodyParser = require('body-parser');
jsonFile = "temp.json";
challengeFile = "challengeFile.json"
var compiler = require('./compiler') 
var problem = require('./problem');
var headers = require('./headers');
var challenges = require('./challenges');
var codearena = require('./codearena');
var fs = require('fs');


const app = express();
app.use(bodyParser.text({type:"*/*"}));
app.use(headers.cors);

app.get('/problems', problem.problemsGetMethod);
app.get('/problems/:id', problem.problemGetMethod);
app.post('/compile', compiler.compilerPostMethod);
app.get('/challenges',challenges.getAll)
app.get('/codearena/ring/:id',codearena.getRing)
app.get('/codearena/isRingReady/:id',codearena.isRingReady)

// listen for requests
app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});
