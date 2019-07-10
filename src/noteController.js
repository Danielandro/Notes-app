(function(exports) {
  
  function NoteController(noteList, noteListView = NoteListView) { // Contructor cuz of capital function name 
    var noteList = noteList;     
    var noteListView = new noteListView(noteList); // constructor cuz of new and gets => ();
    console.log(noteList);
    noteList.addNote("Favourite drink: whisky");

    function getHTMLToPage(htmlElement = "app") {
      var app = document.getElementById(htmlElement);
      var htmlThing = noteListView.convertToHTML();
      app.innerHTML = htmlThing;
      return app;
    }

    return { //JS objects , not ;       
       getHTMLToPage: getHTMLToPage
    }
  }

exports.NoteController = NoteController 
}) (this);
