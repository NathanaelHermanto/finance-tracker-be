/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 *

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
 */

const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
var transactionRouter = require("./routes/TransactionRoutes");
var indexRouter = require("./routes/IndexRoutes");

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: true}));

app.use("/v1/transactions", transactionRouter);

app.use("/", indexRouter);



exports.api = functions.https.onRequest(app);
