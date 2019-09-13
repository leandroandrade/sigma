const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use('/sigma-react/', express.static(path.join(__dirname, '/build')));
app.use('/sigma-react/login', express.static(path.join(__dirname, '/build', 'assets', 'login')));

app.listen(9000, () => console.log('Server start'));