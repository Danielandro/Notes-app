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
    this.convertListToHTML = function() {
      return "<ul><li><div>Favourite food: pesto...</div></li></ul>";
    }
  };

  function testNoteControllerCanBeInstantiated() {
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController);
  };

  function testgetHTMLToPage() {
    var noteController = new NoteController(noteListDouble, noteListViewDouble);
    var htmlElement = document.getElementById("app");
    noteController.getHTMLToPage();
    
    assert.isTrue(htmlElement.innerHTML === "<ul><li><div>Favourite food: pesto...</div></li></ul>");
  };

  testNoteControllerCanBeInstantiated();
  testgetHTMLToPage();
}) ()

// change noteController getHtmlToPage function so I can pass in the element to target
// then I can use a mock in its place for testing
// e.g. mock = {}
//      noteController.getHtmlToPage(mock) => mock = {innerHtml: "some text"}