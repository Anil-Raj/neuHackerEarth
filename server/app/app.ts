import * as  express from 'express';
import* as  bodyParser from 'body-parser';
import * as compilerRouteHandler from './compilerRouteHandler';
import * as challenges from './challenges';
import * as codearena from './codearenaHandler';
import * as problem from './problem';
import * as code from './code'
import * as headers from './headers';

const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.json());
app.use(bodyParser.text({ type: "*/*" }));
app.use(headers.cors);
io.on("connection", function(socket: any) {
    console.log("a user connected");
    // whenever we receive a 'message' we log it out
    socket.on("message", function(message: any) {
      console.log(message);
      socket.emit("message", message);
    });
  });
// io.listen(3030);

// app.get('/problems', problem.getProblemList);
// app.get('/problems/:id', problem.problemGetMethod);
// app.post('/compile', compilerRouteHandler.compilerPostMethod);
// app.get('/challenges', challenges.getAll);
// app.get('/codearena/ring/:id', codearena.getRing);
// app.get('/codearena/isRingReady/:id', codearena.isRingReady);
// app.post('/codearena/ring', codearena.compileUserCode);

// app.post('/code', code.getCode);

io.on('connection', () => {
    console.log('a user is connected')
})
var server = http.listen(3030, () => {
    console.log('server is running on port', server.address().port);
});
