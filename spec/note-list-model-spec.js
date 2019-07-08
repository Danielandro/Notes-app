(function(exports) {
  function testNoteListIsEmpty() {    
    var noteList = new NoteList();    
    assert.isTrue(noteList.allNotes().length === 0);
  };

  function testCreateNote() {    
    var noteList = new NoteList();

    noteList.createNote("Favourite drink: whisky");
    var firstNote = noteList.allNotes()[0];
    assert.isTrue(firstNote.getText() === "Favourite drink: whisky");
  }

  testNoteListIsEmpty();
  testCreateNote();
}) (this);