const express = require("express");
const app = express();
const router = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

// initialization
app.use(cors()) // dev
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to DB
app.use(router);

const port = process.env.PORT || 8000;
// start server
app.listen(port, () => console.log(`listening on ${port}`));
