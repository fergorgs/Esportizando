const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

// initialization
app.use(cors()) // dev
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Connect to DB
app.use(router);

// start server
app.listen(process.env.PORT || 8000);