(function(exports) {
  function testNoteHasText() {
    var note = new Note("My favorite language is Javascript");    
    assert.isTrue(note.getText() === "My favorite language is Javascript");      
  };

  testNoteHasText();
}) (this);
