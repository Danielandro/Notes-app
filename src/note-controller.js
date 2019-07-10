(function(exports) {
  
  function NoteController(noteList) { // Contructor cuz of capital function name 
    var noteList = noteList; 
    var noteListView = new NoteListView(noteList); // constructor cuz of new and gets => ();

    function addNote(text) {
      noteList.createNote("Favourite drink: whisky");
    }

    function getHTMLToPage() {
      var getHTMLToPage;
      
      var app = document.getElementById("app");
      console.log(app);

      app.innerText = "Howdy";

      var htmlThing = noteListView.convertListToHTML()  

      app.innerHTML = htmlThing;
    }

    return { //JS objects , not ;
       addNote: addNote,
       getHTMLToPage: getHTMLToPage
    }
  }


exports.NoteController = NoteController 
}) (this);