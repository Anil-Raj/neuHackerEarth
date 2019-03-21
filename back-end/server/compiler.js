var fs = require('fs');
exports.compilerPostMethod = function (req, res) {
    console.log(req.body);
    var body = JSON.parse(req.body)
    fs.writeFile('./bin/app.js', body.code, function (err, data) {
        var exec = require('child_process').exec;
        if (body.language == 'JS') {
            fs.writeFile('./bin/app.js', body.code, function (err, data) {
                exec("node ./bin/app.js", function (err, stdout, stderr) {
                    res.send(stdout);
                });
                if (err) console.log(err);
                console.log("Successfully Written to File.");
            });
        } else {
            fs.writeFile('program.cs', body.code, function (err, data) {

                exec("csc program.cs", function (err, stdout, stderr) {
                    console.log('aaaaaaaaaa');
                    exec("program.exe", function (err, stdout, stderr) {
                        console.log(err,stdout,stderr,'asdasdf');
                        res.send(stdout);
                    });
                });
                if (err) console.log(err);
                console.log("Successfully Written to File.");

            });
        }
    });
}