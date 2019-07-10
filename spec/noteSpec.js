(function(exports) {
  function testNoteHasText() {
    // create a note with some text
    var note = new Note("My favorite language is Javascript");   
    // check note has the text
    assert.isTrue(note.getText() === "My favorite language is Javascript");      
  };

  testNoteHasText();
}) (this);
