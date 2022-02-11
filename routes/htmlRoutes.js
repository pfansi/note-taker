// import the path functions
const path = require("path");

// declare the route function that will handle html pages

const htmlRoutes = (app) => {
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

module.exports = htmlRoutes;
