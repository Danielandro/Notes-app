(function(exports) {
  
  function NoteController(noteList) {
    var noteList = noteList;

    function addNote(text) {
      noteList.createNote("Favourite drink: whisky");
    }
    return {
       addNote: addNote
    }
  }

exports.NoteController = NoteController 
}) (this);

// var app = document.getElementById("app");
// console.log(app);

// app.innerText = "Howdy";

