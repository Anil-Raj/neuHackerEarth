import { createServer, Server } from 'http';
import * as express from 'express';
import * as headers from './headers';
import * as routes from './routes'

export class HackerEarthServer {
    public static readonly PORT:number = 3030;
    private app: express.Application = express();
    private server: Server = createServer(this.app);
    private port: string | number = process.env.PORT || HackerEarthServer.PORT;
    constructor() {
        this.config();
        this.listen();
    }
    private config(): void {
        this.app.use(headers.cors);
        this.app.use(express.json());
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        })
        routes.handler(this.app);
    }
    public getApp(): express.Application {
        return this.app;;
    }
}