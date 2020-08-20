const { v4: uuidv4 } = require('uuid');
let fs = require("fs");             

var noteList = require("../db/db.json");

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(noteList);


  });

  app.post("/api/notes", function(req, res) {
      noteList.push(req.body);
      res.json(true);
    
    //create unique id on req.body during my psot request
    });


    //is this written correctly?
  app.delete("/api/clear", function(req, res) {
    noteList = [];
    
    fs.writeFile("./db/db.json", noteList, function (err) {
        if (err) console.log(error)
    })
    res.json({ ok: true });

  });
};