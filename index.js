const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = require('./config');
const route = require('./route');
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/mydt");

const db = mongoose.connection;

db.on('error',() => console.error("voxjuin error"));

db.once('open',() => console.log("server opened.."));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/",route);

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port,() => {
    console.log("port 8080 running for server...");
});