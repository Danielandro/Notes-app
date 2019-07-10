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

  function testListModelWithNoNotes() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);

    assert.isTrue(noteListView.convertListToHTML() === "<ul><li>No notes found</li></ul>");
  }

  function testListModelWithOneNote() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);
    noteListDouble.createNote("Favourite show: Dexter");

    assert.isTrue(noteListView.convertListToHTML() === "<ul><li><div>Favourite show: Dexter</div></li></ul>");
  }

  function testListModelWithSeveralNotes() {
    let noteListDouble = new NoteListDouble();
    let noteListView = new NoteListView(noteListDouble);
    noteListDouble.createNote("Favourite food: pesto");
    noteListDouble.createNote("Favourite drink: whisky");
    noteListDouble.createNote("Favourite show: Dexter");

    var htmlString = "<ul><li><div>Favourite food: pesto</div></li>" + 
                     "<li><div>Favourite drink: whisky</div></li>" +
                     "<li><div>Favourite show: Dexter</div></li></ul>"

    // check if function converts list to string
    assert.isTrue(noteListView.convertListToHTML() === htmlString);
  }

  testListModelWithNoNotes()
  testListModelWithOneNote();
  testListModelWithSeveralNotes();
}) (this);
