exec = require('child_process').exec;
exec("csc .\\bin\\program.cs", function (err, stdout, stderr) {
    exec('program.exe',function(err, stdout, stderr){
        console.log(err,stdout,stderr);
    })
});
