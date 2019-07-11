(function(exports) {
  function testNoteListIsEmpty() {    
    var noteList = new NoteList();   
    // check new notelist has no notes 
    assert.isTrue(noteList.notes().length === 0);
  };

  function testAddNoteToList() {  
    // note double
    var noteDouble = function(text) {
      this.text = text;
    };  
    // note list
    var noteList = new NoteList();
    // add note to notelist
    var addedNote = noteList.addNote("Favourite drink: whisky", noteDouble);
    // check note was added to note list
    assert.isTrue(noteList.notes()[0] === addedNote);
  }

  testNoteListIsEmpty();
  testAddNoteToList();
}) (this);
