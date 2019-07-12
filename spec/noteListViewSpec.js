(function(exports) {
  // define note & noteList mocks
  var NoteDouble = function (text) {
    this.text = text;
  };

  var NoteListDouble = function() {
    this._notes = [];
    this._counter = 0;
    this.addNote = function(text) {
      var noteDouble = new NoteDouble(text);
      noteDouble.id = this._counter;
      this._counter++;
      this.notes().push(noteDouble);
    }
    this.notes = function() {
      return this._notes;
    }
  }

  // no notes
  function testListModelWithNoNotes() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);

    assert.isTrue(noteListView.convertListToHTML() === "<ul><li>No notes found</li></ul>");
  }

  // one note
  function testListModelWithOneNote() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);
    noteListDouble.addNote("Favourite show: Dexter");

    assert.isTrue(noteListView.convertListToHTML() === "<ul><li><a href=\"#notes/0\">Favourite show: Dexte...</a></li></ul>");
  }

  // more notes
  function testListModelWithSeveralNotes() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);
    noteListDouble.addNote("Favourite food: pesto");
    noteListDouble.addNote("Favourite drink: whisky");
    noteListDouble.addNote("Favourite show: Dexter");

    var htmlString = 
          "<ul><li><a href=\"#notes/0\">Favourite food: pesto...</a></li>" + 
          "<li><a href=\"#notes/1\">Favourite drink: whis...</a></li>" +
          "<li><a href=\"#notes/2\">Favourite show: Dexte...</a></li></ul>"
    // check if function converts list to string    
    assert.isTrue(noteListView.convertListToHTML() === htmlString);
  }
  
  testListModelWithNoNotes()
  testListModelWithOneNote();
  testListModelWithSeveralNotes();
}) (this);
