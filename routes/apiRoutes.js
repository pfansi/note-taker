// defined fs functions
const fs = require("fs");

// imported 'uuid' npm package to create unique id
const { v4: uuidv4 } = require("uuid");

// create the variable function that is going to hold all the api routes
const apiRoutes = (app) => {
  // api GET request to retrieve the notes
  app.get("/api/notes", (req, res) => {
    console.log("New APP request made to the PORT");
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    res.json(noteData);
  });

  // create the Post request that will read and write note into the database
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;

    console.log("New Note created successfully : " + JSON.stringify(newNote));

    // new id added to the newly created note
    newNote.id = uuidv4();

    // variable function that will read the array notes objet in the database
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // Pushed newly created note into the db.json file
    noteData.push(newNote);

    // this function will write the newly created note into the db.json file
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData));

    console.log("New note successfully added to the 'db.json' file!");

    res.json(noteData);
  });

  // Create an API delete request that will delete a specific note based on the note ID
  app.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id.toString();

    // this function will Read all the notes from db.json file
    let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // this will filter the data to be deleted based on the ID
    const newData = noteData.filter((note) => note.id.toString() !== noteId);

    fs.writeFileSync("./db/db.json", JSON.stringify(newData));

    console.log(`This note ID : ${noteId} was successfully deleted`);

    res.json(newData);
  });
};

module.exports = apiRoutes;
