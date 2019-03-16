const express = require('express');
const bodyParser = require('body-parser');
jsonFile = "temp.json";
var compiler = require('./compiler') 
var problem = require('./problem');
var headers = require('./headers');

const app = express();
app.use(bodyParser.text({type:"*/*"}));
app.use(headers.cors);

app.get('/problems', problem.problemsGetMethod);
app.get('/problems/:id', problem.problemGetMethod);
app.post('/', compiler.compilerPostMethod);


// listen for requests
app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});
