// Dependencies
const express = require("express");

// Express configuration
//Tells node that we are creating an 'express' server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// require("./routes/apiRoutes");

// require("./routes/htmlRoutes");

app.listen(PORT, function () {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
