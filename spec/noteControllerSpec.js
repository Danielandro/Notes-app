(function(exports) {
  // create doubles
  var NoteDouble = function (text) {
    this.text = text;
  };
  
  var noteListDouble = function() {
    this._notes = ["Favourite food: pesto"];
    this.addNote = function(text) {
      return 1;
    };
  }

  var noteListViewDouble = function () { 
    this.covertListToHTML = function() {
      return "<ul><li><div>Favourite food: pesto</div></li></ul>";
    }
  };
  // noteListDouble.createNote = function() {
  //   return NoteDouble("Favourite food: pesto");
  // } 

  function testNoteControllerCanBeInstantiated() {
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController);
  };

  function testgetHTMLToPage() {
    var noteController = new NoteController(noteListDouble, noteListViewDouble);

    var htmlElement = document.createElement("h1");
    noteController.getHTMLToPage(htmlElement);
    
    assert.isTrue(element.innerHTML === "<ul><li><div>Favourite food: pesto</div></li></ul>");

  };

  testNoteControllerCanBeInstantiated();
  testgetHTMLToPage();
}) ()