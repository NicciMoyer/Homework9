let noteList = require("../db.json")
const { v4: uuidv4 } = require('uuid');
let fs = require("fs");             


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteList);
    fs.readFile("./db.json", noteList, function (err) {
      if (err) console.log(error)
  })
  });

  app.post("/api/notes", function(req, res) {
      let note = req.body;
      note.id = uuidv4(); 
      noteList.push(note)
      res.json(true);
   // fs.writeFile(noteList, (err, data)).push(note)
    });

    app.delete("/api/notes/:deletedNoteID", function(req, res) {
      var selectedID = req.params.deletedNoteID;
      noteList = noteList.filter(note => note.id !== selectedID)
    
    fs.writeFile("./db.json", noteList, function (err) {
        if (err) console.log(error)
    })
    res.json({ ok: true });

  });
};