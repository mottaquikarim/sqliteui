const express = require('express');
const fs = require('fs');
const fsReadPromise = (...args) => {
    return new Promise((resolve, reject) => {
        fs.readFile(...args, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}
const broadcast = (wsInstance) => {
    return (data) => {
        const clients = wsInstance.clients;
        clients.forEach((client) => {
            if (client.readyState === 1) {
                client.send(data);
            }
        });
    }
}

const appFactory = (dbPath, app) => {
    // grab websockets
    const expressWs = require('express-ws')(app);
    const wsInstance = expressWs.getWss();

    app.ws('/', function(ws, req) {
      ws.send('LOAD_BUFFER');

      ws.on('message', function(msg) {
        console.log(msg);
      });
    }); // pull data

    app.get('/sqlite-data', (req, res) => {
      fs.readFile(dbPath, (err, data) => {
        res.send(data);
      });
    });

    //return app;
    return {app, broadcast: broadcast(wsInstance)}
}

module.exports = appFactory;





