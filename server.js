const express = require('express');
const app = express();
const port = 3000;

var path = require('path');

const clientpath = `${__dirname}/../client`;

app.use("/src/",express.static(clientpath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(`${clientpath}/_index.html`));
})

app.get('/host', (req, res) => {
    res.sendFile(path.resolve(`${clientpath}/hostIndex.html`));
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})


const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8083 });

var coords = [];

wss.on('connection', (ws,req) => {
    console.log("New user has arrived !");

    ws.on('close', () => {
        console.log("Client has disconnected");
    });

    ws.on('message', (data) => {
        console.log(data.toString());
        
        wss.clients.forEach(client => client.send(data.toString()));
    });
});
