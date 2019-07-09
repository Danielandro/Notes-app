(function(exports) {
  // define note & noteList mocks
  var NoteDouble = function (text) {
    this.text = text;
  };

  var NoteListDouble = function() {
    this.list = [];
  }

  NoteListDouble.prototype.createNote = function (text) {
    var noteDouble = new NoteDouble(text);
    this.list.push(noteDouble);
  }

  NoteListDouble.prototype.allNotes = function () {
    return this.list;
  }

  function testConvertListToHTML() {
    let noteListDouble = new NoteListDouble();
    // add two notes to note list
    noteListDouble.createNote("Favourite food: pesto");
    noteListDouble.createNote("Favourite drink: whisky");

    // create note list view
    let noteListView = new NoteListView(noteListDouble);
    var htmlString = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: whisky</div></li></ul>"
    
    // check if function converts list to string
    assert.isTrue(noteListView.convertListToHTML() === htmlString);
  }

  function testListModelHasNoNotes() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);

    assert.isTrue(noteListView.convertListToHTML() === "<ul><li>No notes found</li></ul>");
  }

  testConvertListToHTML();
  testListModelHasNoNotes()
}) (this);
