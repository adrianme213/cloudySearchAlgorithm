// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

// Import middlewares
const {logTimeUrl, setHeaders} = require('./middleware/index.js');

// Setup server
const app = express();
const port = 8080;
app.use(setHeaders);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logTimeUrl);

// Static files
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/*', (req, res) => res.status(404).json('This page does not exist'));

// Create server and turn on server
const server = http.createServer(app);
server.listen(port, () => console.log(`Example app on Port: ${port}`));
module.exports = server;
