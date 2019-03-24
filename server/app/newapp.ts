import { CodeArenaServer } from './CodeArenaServer';

let server = new CodeArenaServer();
let app = server.getApp();
let io = server.getSocketIO();
export { app,io };