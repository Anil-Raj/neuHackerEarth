import { createServer, Server } from 'http';
import * as express from 'express';
import* as  bodyParser from 'body-parser';
import * as socketIo from 'socket.io';
import * as headers from './headers';
import * as routes from './routes'
import * as sockets from './socket'

export class HackerEarthServer {
    public static readonly PORT:number = 3030;
    private app: express.Application = express();
    private server: Server = createServer(this.app);
    private io: SocketIO.Server =  socketIo(this.server);
    private port: string | number = process.env.PORT || HackerEarthServer.PORT;
    constructor() {
        this.config();
        this.sockets();
        this.listen();
    }
    private config(): void {
        this.app.use(headers.cors);
        this.app.use(express.json());
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
            sockets.handler(socket);
          });
        routes.handler(this.app);
    }
    public getApp(): express.Application {
        return this.app;
    }
}