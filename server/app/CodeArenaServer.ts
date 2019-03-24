import { createServer, Server } from 'http';
import * as express from 'express';
import* as  bodyParser from 'body-parser';
import * as socketIo from 'socket.io';
import * as headers from './headers';
import * as compilerRouteHandler from './compilerRouteHandler';
import * as challenges from './challenges';
import * as codearena from './codearenaHandler';
import * as problem from './problem';
import * as code from './code';
var events = require('events');
var emitter = require('./event')


// import { Message } from './model';

export class CodeArenaServer {
    public static readonly PORT:number = 3030;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;
    private static _instance: CodeArenaServer;
    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
        this.app.use(headers.cors);
        this.app.use(express.json());
        // this.app.use(bodyParser.text({ type: "*/*" }));

    }
    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || CodeArenaServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
        this.io.on("connection", function(socket: any) {
            console.log("a user connected");
            // whenever we receive a 'message' we log it out
    

            //Create an event handler:
            var myEventHandler = function (message:any) {
                console.log('join_fight',message);                
                socket.emit("join_fight", message);
            }
            //Assign the event handler to an event:
            emitter.eventBus.on('join_fight', myEventHandler);

            //Fire the 'scream' event:
            // eventEmitter.emit('scream');
            socket.on("message", function(message: any) {
              console.log(message);
              socket.emit("message", message);
            });
            socket.on("fight", function(message: any) {
                socket.emit("user", message);
                console.log(message);
                
              });
          });
        this.app.get('/problems', problem.getProblemList);
        this.app.get('/problems/:id', problem.problemGetMethod);
        this.app.post('/compile', compilerRouteHandler.compilerPostMethod);
        this.app.get('/challenges', challenges.getAll);
        this.app.post('/codearena/join_fight', codearena.join_fight);
        // this.app.get('/codearena/isRingReady/:id', codearena.isRingReady);
        this.app.post('/codearena/compile', codearena.compileUserCode);
        this.app.post('/code', code.getCode);
    }
    public getSocketIO() :SocketIO.Server{
        return this.io;
    }

    public getApp(): express.Application {
        return this.app;
    }
}