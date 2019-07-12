(function(exports) {
  
  function NoteController(noteList, noteListView = NoteListView) { // Contructor cuz of capital function name 
    var noteList = noteList;     
    var noteListView = new noteListView(noteList); // constructor cuz of new and gets => ();
    noteList.addNote("Favourite drink: whisky");

    function getHTMLToPage() {
      var app = document.getElementById("app");
      console.log("NoteList:", noteList);
      console.log("NoteListView:", noteListView);
      var htmlThing = noteListView.convertListToHTML();
      app.innerHTML = htmlThing;
      return app;
    }

    return { //JS objects , not ;       
      getHTMLToPage: getHTMLToPage
    }
  }

exports.NoteController = NoteController 
}) (this);
