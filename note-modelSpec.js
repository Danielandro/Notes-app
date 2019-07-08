(function() {
  function testNoteThingText() {
    var note = new Note("My favorite language is Javascript");
    
    if (note.text !== "My favorite language is Javascript") {
      throw new Error("My favorite language is NOT Javascript");
      }
  };

  testNoteThingText();
}) (this);

