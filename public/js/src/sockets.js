const __ = {};
__.socketHost = `ws://${window.location.host}/`;

const SocketHandler = {};

SocketHandler.init = (cb = () => {}) => {
    SocketHandler.socket = new WebSocket(__.socketHost);
    SocketHandler.socket.onmessage = (event) => {
        cb(event.data);
    }
}

SocketHandler.send = (data) => {
    if (!SocketHandler.socket) return;
    SocketHandler.socket.send(data);
}

export { SocketHandler }
