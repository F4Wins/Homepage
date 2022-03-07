const express = require('express');
const http = require('http');
const path = require('path');
const PORT = 5000;

const app = express();
const server = http.createServer(app);

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/html/homepage.html');
});

app.get('/cellcoverage', (req, res, next) => {
    res.sendFile(__dirname + '/html/cellcoverage.html');
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});