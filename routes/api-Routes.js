const express = require("express");
const router = express.Router();
const path = require("path");

// imported 'uuid' npm package for unique id
const { v4: uuidv1 } = require("uuid");

// API get request route
router.get("/notes", (req, res) => {
  const dataNotes = fs.readFileSync(
    path.join(__dirname, "./db/db.json"),
    "utf-8"
  );
  //
  const parseDataNotes = JSON.parse(dataNotes);
  res.json(parseDataNotes);
});

router.post("/notes", (req, res) => {
  const dataNotes = fs.readFileSync(
    path.join(__dirname, "./db/db.json"),
    "utf-8"
  );
  const parseDataNotes = JSON.parse(dataNotes);
  req.body.id = uuidv1();
  parseDataNotes.push(req.body);

  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(parseDataNotes),
    "utf-8"
  );

  console.log("Successfully added new note to 'db.json' file!");
  // confirm response sent
  res.json(parseDataNotes);
});

// router function that will delete file
router.delete("/notes/:id", function (req, res) {
  // fetch Id for the entry that will be delete
  let idNote = parseInt(req.params.id);

  console.log(`noteId: ${idNote} will be deleted`);

  // Read data from 'db.json' file
  let dataNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

  // filter data to get notes except the one to delete
  const newDataNotes = dataNotes.filter(
    (note) => note.id.toString() !== idNote
  );

  // Write new data to 'db.json' file
  fs.writeFileSync("./db/db.json", JSON.stringify(newDataNotes));

  console.log(`Note with id : ${idNote} deleted Successfully`);

  // confirm new data
  response.json(newDataNotes);
});

module.exports = router;
