const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");

const transactionRouter = require("./routes/TransactionRoutes");
const indexRouter = require("./routes/IndexRoutes");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: true}));

app.use("/api/v1/transactions", transactionRouter);
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
