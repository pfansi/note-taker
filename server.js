const path = require("path");
const express = require("express");
var uuidv1 = require("uuidv1");

const routes = require("/routes");

// setting an environment port
const PORT = process.env.PORT || 3001;

const app = express();

// Set middlewares functions that will parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
