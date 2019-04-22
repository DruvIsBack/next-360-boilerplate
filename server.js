/*const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

let core = require('./core');

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1)
    });*/


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

