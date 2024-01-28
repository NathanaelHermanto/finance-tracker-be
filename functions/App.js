const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const transactionRouter = require("./routes/TransactionRoutes");
const indexRouter = require("./routes/IndexRoutes");

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: true}));

app.use("/v1/transactions", transactionRouter);

app.use("/", indexRouter);


exports.api = functions.https.onRequest(app);
