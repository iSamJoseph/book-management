const express = require("express");
const cors = require("cors");
var session = require("express-session");

const bookroutes = require("./route/routes");
const app = express();

app.use(express.json());
app.use(express.static("./view"));

const corsOptions = {
  origin: true,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(
  session({
    secret: "keyboard cat",
    cookie: { sameSite: "strict" },
    saveUninitialized: true,
    resave: true,
  })
);

app.use("/", bookroutes);

module.exports = app;
