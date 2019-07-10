(function(exports) {
  
  function NoteController(noteList, noteListView = NoteListView) { // Contructor cuz of capital function name 
    var noteList = noteList; 
    noteList.createNote("Favourite drink: whisky");
    var noteListView = new noteListView(noteList); // constructor cuz of new and gets => ();

    function getHTMLToPage(thing = "app") {
      var app = document.getElementById(thing);
      var htmlThing = noteListView.convertToHTML();
      app.innerHTML = htmlThing;
    }

    return { //JS objects , not ;       
       getHTMLToPage: getHTMLToPage
    }
  }


exports.NoteController = NoteController 
}) (this);