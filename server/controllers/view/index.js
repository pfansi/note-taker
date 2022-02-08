const path = require("path");

//these are the function that the path to render the result
const renderHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/index.html"));
};

const renderNote = (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/notes.html"));
};

module.exports = {
  renderHomePage,
  renderNote,
};
