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
    fs.writeFile(noteList, (err, data)).push(note)
    });


  app.delete("/api/clear", function(req, res) {
    noteList = [];

    //  HOW DO I FINISH THIS FUNCTION... OR DO I USE THE FOR EACH COMMENTED BELOW
    let deletedNote = noteList.filter(note.id){
     return note.id 
    }

    // noteList.forEach(note => {
    //   if (note.id === deleteNote) {
        
    //   }
    // });
    fs.writeFile("./db.json", noteList, function (err) {
        if (err) console.log(error)
    })
    res.json({ ok: true });

  });
};