const express = require('express');
const http = require('http');
const path = require('path');
var XMLHttpRequest = require('xhr2');
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

app.get('/calendar', (req, res, next) => {
    res.sendFile(__dirname + '/html/calendar.html');
});
app.get('/calendar/events', (req, res, next) => {
    let events = [];
    var x = req.query.land;
    console.log(x);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                let data = [];
                data = JSON.parse(this.responseText);
                for (let i in data[x]) {
                    var test = {
                        id: i,
                        title: i,
                        start: data[x][i].datum,
                        end: data[x][i].datum
                    }
                    events.push(test);
                }
            }
            res.send(events);
        }
    }
    request.open('GET', 'https://feiertage-api.de/api/?jahr=2022');
    request.send();
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});