const express = require("express");
const server_router = require('./core/router');
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const next_app = next({dev});
const handle = next_app.getRequestHandler();


function createServer() {
    const server = express();
    server.use('/api', server_router);
    server.get("*", (req, res) => handle(req, res));
    return server;
}


next_app.prepare().then(() => {
    const app = createServer();
    app.listen(port);

    if (dev) {
        console.log("Development Build Running...");
    } else {
        console.log("Production Build Running...");
    }
}).catch(ex => {
    console.error(ex.stack);
    process.exit(1)
});

