import express from 'express';

expo app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

export app;