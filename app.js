const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
require('dotenv').config();

const indexRouter = require("./routes/IndexRoutes");
const transactionRouter = require("./routes/TransactionRoutes");
const inventoryRouter = require("./routes/InventoryRoutes");
const authRouter = require("./routes/AuthRoutes")

const app = express();

const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({origin: true}));

app.use("/", indexRouter);
app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/inventories", inventoryRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
