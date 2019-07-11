(function(exports) {
  // define note & noteList mocks
  var NoteDouble = function (text) {
    this.text = text;
  };

  var NoteListDouble = function() {
    this._notes = [];
    this.addNote = function(text) {
      var noteDouble = new NoteDouble(text);
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

    assert.isTrue(noteListView.convertListToHTML() === "<ul><li><div>Favourite show: Dexter</div></li></ul>");
  }

  // more notes
  function testListModelWithSeveralNotes() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);
    noteListDouble.addNote("Favourite food: pesto");
    noteListDouble.addNote("Favourite drink: whisky");
    noteListDouble.addNote("Favourite show: Dexter");

    var htmlString = 
          "<ul><li><div>Favourite food: pesto</div></li>" + 
          "<li><div>Favourite drink: whisky</div></li>" +
          "<li><div>Favourite show: Dexter</div></li></ul>"

    // check if function converts list to string
    assert.isTrue(noteListView.convertListToHTML() === htmlString);
  }

  testListModelWithNoNotes()
  testListModelWithOneNote();
  testListModelWithSeveralNotes();
}) (this);
