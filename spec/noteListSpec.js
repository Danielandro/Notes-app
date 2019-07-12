(function(exports) {
  // note double
  var noteDouble = function (text) {
    this.text = text;
  }; 

  function testNoteListIsEmpty() {    
    var noteList = new NoteList();   
    // check new notelist has no notes 
    assert.isTrue(noteList.notes().length === 0);
  };

  function testAddNoteToList() {      
    // note list
    var noteList = new NoteList();
    // add note to notelist
    var addedNote = noteList.addNote("Favourite drink: whisky", noteDouble);
    // check note was added to note list
    assert.isTrue(noteList.notes()[0] === addedNote);
  }

  function testNotesAreGivenIDWhenCreated() {
    var noteList = new NoteList();
    var note1 = noteList.addNote("Favourite drink: whisky", noteDouble);
    var note2 = noteList.addNote("Favourite food: bibimbap", noteDouble);

    assert.isTrue(note1.id === 0);
    assert.isTrue(note2.id === 1);
  }

  testNoteListIsEmpty();
  testAddNoteToList();
  testNotesAreGivenIDWhenCreated();
}) (this);
