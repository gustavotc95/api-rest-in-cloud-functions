const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const routers = require('./src/routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

exports.api = functions.https.onRequest(app)
