(function(exports) {
  // create doubles
  var NoteDouble = function (text) {
    this.text = text;
  };
  
  var noteListDouble = {
    _notes: ["Favourite food: pesto"],
    addNote: function(text) {
      return 1;
    }
  }

  var noteListViewDouble = function () { 
    this.convertToHTML = function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>";
    }
  };

  function testNoteControllerCanBeInstantiated() {
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController);
  };

  function testgetHTMLToPage() {
    var noteController = new NoteController(noteListDouble, noteListViewDouble);

    var htmlElement = document.createElement("h1");
    htmlElement.setAttribute("id", "app");
    document.body.appendChild(htmlElement);
    noteController.getHTMLToPage();
    
    assert.isTrue(htmlElement.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>");

  };

  testNoteControllerCanBeInstantiated();
  testgetHTMLToPage();
}) ()