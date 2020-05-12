const WebSocket = require("ws");

function WSUtils() {
    const wsu = {};

    wsu.setupWS = (server) => {
        console.log("Setting up Web Socket");
        const wss = new WebSocket.Server({ server });

        wss.on("connection", (ws) => {
            console.log("New connection!");
            //Luis Ruiz: No me queda muy claro por qué enviar solo un 1 y un 0 por el socket. Si es por probar
            //que funciona, omitir este mensaje.
            ws.send(1);
            ws.send(0);
        });
    };

    return wsu;
}

module.exports = WSUtils();
