const express = require('express');
let app = express();

const socket = require('./websocket');

app.use('/', express.static('public', {
    'index': ['index.html']
}));

const SocketInst = socket('./veekun-pokedex.sqlite', app);
app = SocketInst.app;

app.get('/foo', (req, resp) => {
    SocketInst.broadcast('LOAD_BUFFER');
    resp.send('done');
});
app.listen(3009);
