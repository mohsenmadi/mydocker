const express = require('express');
const {port, host, db} = require("./configuration");
const {connectDb} = require("./helpers/db");

const app = express();

app.get('/test', (req, res) => {
    res.send('==> our api server is working fine');
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`==> Server started on port ${port}`);
        console.log(`==> Our host is ${host}`);
        console.log(`==> Our db is ${db}`);
    });
}

// startServer()

connectDb()
    .on("error", console.log)
    .on("disconnected", connectDb)
    .once("open", startServer);



